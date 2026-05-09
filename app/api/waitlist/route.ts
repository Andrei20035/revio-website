import { NextResponse } from "next/server"
import { createSupabaseAdminClient } from "@/lib/supabaseAdmin"

type WaitlistPayload = {
  email?: unknown
  username?: unknown
  platform?: unknown
  country?: unknown
}

const usernameRegex = /^[a-z0-9_]{3,20}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const duplicateEmailMessage = "This email is already on the waitlist."
const duplicateUsernameMessage = "This username is already reserved."

function isPlatform(value: unknown): value is "ios" | "android" {
  return value === "ios" || value === "android"
}

function duplicateError(message: string) {
  return NextResponse.json({ error: message }, { status: 409 })
}

export async function POST(request: Request) {
  let payload: WaitlistPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 })
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : ""
  const username = typeof payload.username === "string" ? payload.username.trim().toLowerCase() : ""
  const platform = payload.platform
  const country = typeof payload.country === "string" ? payload.country.trim() : ""

  if (!emailRegex.test(email) || !usernameRegex.test(username) || !isPlatform(platform) || !country) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 })
  }

  const supabase = createSupabaseAdminClient()
  const { error } = await supabase
    .from("waitlist_signups")
    .insert({
      email,
      username,
      platform,
      country,
    })

  if (error) {
    if (error.code === "23505") {
      const duplicateSource = `${error.message} ${error.details ?? ""}`.toLowerCase()

      if (duplicateSource.includes("email")) {
        return duplicateError(duplicateEmailMessage)
      }

      if (duplicateSource.includes("username")) {
        return duplicateError(duplicateUsernameMessage)
      }
    }

    console.error("Failed to insert waitlist signup", error)
    return NextResponse.json({ error: "Unable to join the waitlist right now." }, { status: 500 })
  }

  return NextResponse.json({ success: true, position: null }, { status: 201 })
}

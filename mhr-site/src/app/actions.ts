"use server";

export async function submitVolunteer(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  // This pulls the URL from your hidden .env file
  const url = process.env.GOOGLE_SCRIPT_URL;

  if (!url) return { success: false, error: "Configuration Error" };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return { success: response.ok };
  } catch (err) {
    return { success: false, error: "Network Error" };
  }
}

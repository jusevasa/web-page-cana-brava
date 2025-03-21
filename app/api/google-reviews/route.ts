import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || '';
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '';

    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&languageCode=es`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google API error:', errorData);
      throw new Error(`Failed to fetch Google reviews: ${response.status}`);
    }

    const data = await response.json();
    console.log('Google reviews data:', data);

    return NextResponse.json({
      reviews: data.reviews || [],
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
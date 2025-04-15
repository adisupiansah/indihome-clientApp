import { db } from "@/libs/Firebase";
import { ref, set } from "firebase/database";

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Generate unique ID untuk client
    const clientId = Date.now().toString();
    
    // Simpan ke Firebase Realtime Database
    await set(ref(db, `clients/${clientId}`), {
      ...data,
      tanggalDaftar: new Date().toISOString(),
      status: 'pending'
    });

    return new Response(JSON.stringify({
      success: true,
      clientId
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ 
      error: "Internal server error" 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
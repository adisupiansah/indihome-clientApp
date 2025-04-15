// src/app/api/v1/selectedpaket/[id]/route.js
import { db } from "@/libs/Firebase";
import { ref, get } from "firebase/database";

export async function GET(request) {
  try {
    // Ambil ID dari URL
    const id = request.url.split('/').pop();
    
    const dataRef = ref(db, `indihome/${id}`);
    const snapshot = await get(dataRef);
    
    if (snapshot.exists()) {
      return new Response(JSON.stringify({
        id,
        ...snapshot.val()
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify({ 
        message: "Paket tidak ditemukan" 
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
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
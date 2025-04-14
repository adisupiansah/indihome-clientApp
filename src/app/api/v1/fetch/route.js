import { db } from "@/libs/Firebase";
import { ref, get } from "firebase/database";

export async function GET() {
    try {
        // Referensi ke lokasi data yang ingin diambil
        const dataRef = ref(db, 'indihome/');
        
        // Mengambil data
        const snapshot = await get(dataRef);
        
        if (snapshot.exists()) {
            const dataObject = snapshot.val();
            
            // Konversi object ke array
            const dataArray = Object.keys(dataObject).map(key => {
                return {
                    id: key, // menyimpan key sebagai id (paket1, paket2, dll)
                    ...dataObject[key] // menyimpan semua properti paket
                };
            });
            
            return new Response(JSON.stringify(dataArray), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            return new Response(JSON.stringify({ message: "No data available" }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
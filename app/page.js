'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Home() {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    loadRooms()
  }, [])

  async function loadRooms() {
    const { data } = await supabase
      .from('rooms')
      .select('*')
      .order('room_number')

    if (data) setRooms(data)
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>SERENA HOTEL PMS</h1>

      {rooms.map((room) => (
        <div
          key={room.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: 10,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <h3>Δωμάτιο {room.room_number}</h3>
          <p>{room.status}</p>
        </div>
      ))}
    </div>
  )
}

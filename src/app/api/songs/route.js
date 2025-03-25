import { createConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // CREATE CONNECTION.
    let connect = await createConnection();
    let getSongQuery =
      "SELECT songs.id, songs.title, songs.file, songs.artist_id as artistID, artist.artist_name AS artistName, artist.artist_img AS artistImg FROM songs JOIN artist ON songs.artist_id = artist.id";
    let songsList = await connect.query(getSongQuery);

    return NextResponse.json({
      status: "success",
      songs: songsList[0],
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: "error", err });
  }
};

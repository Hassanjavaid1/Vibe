import { createConnection } from "../../lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    let body = await request.json();

    const { title, artistName, artistImg, files } = body;

    let connect = await createConnection();

    // Check Artist.

    let artistExistQuery = "SELECT * FROM artist WHERE artist_name=?";
    let [artistExist] = await connect.query(artistExistQuery, [artistName]);
    let artistID = null;

    if (artistExist.length === 0) {
      let artistQuery =
        "INSERT INTO artist(artist_name,artist_img) VALUES (?,?)";
      let [result] = await connect.query(artistQuery, [artistName, artistImg]);

      artistID = result.insertId;
    } else {
      artistID = artistExist[0].id;
     // console.log("else condition id", artistID);

      // Update Artist Profile Image

      let imgUpdateQuery = "UPDATE artist SET artist_img=? WHERE id=?";
      await connect.query(imgUpdateQuery, [artistImg, artistID]);
    }

    let mediaArray = title.map((t, index) => [t, files[index], artistID]);

    let insertQuery = "INSERT INTO songs(title,file,artist_id) VALUES ?";

    await connect.query(insertQuery, [mediaArray]);

    return NextResponse.json({
      status: "Success",
      description: "Data has been uploaded successfully.",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: "Error", description: err });
  }
}

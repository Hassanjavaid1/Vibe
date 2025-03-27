"use client";
import { useEffect, useState } from "react";
import { MdUpload } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

function page() {
  const [formData, setFormData] = useState({
    artistName: "" || null,
    artistImg: null,
    files: null,
  });
  const [uploadedArr, setUploadedArr] = useState({
    urlsArr: [],
    title: [],
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let files = formData.files;
    setStatus(`Uploading 👉 ${formData.artistImg[0].name}`);

    let uploadedImg = await uploadFiles(formData.artistImg[0]);

    for (let i = 0; i < files.length; i++) {
      let kilobytes = files[i].size / (1024 * 1024);
      let megaBytes = Math.trunc(kilobytes * 100) / 100;

      setStatus(
        `Uploading 👉 ${megaBytes}${megaBytes > 1 ? "MBs" : "MB"} - ${
          files[i].name
        }`
      );

      let uploadedSong = await uploadFiles(files[i]);
      //console.log("Uploaded-SONG", uploadedSong);
      setUploadedArr(
        uploadedArr.urlsArr.push(uploadedSong.secure_url),
        uploadedArr.title.push(files[i].name)
      );
    }

    let updatedFormData = {
      ...formData,
      title: uploadedArr.title.map((title) => title),
      artistImg: uploadedImg.secure_url,
      files: uploadedArr.urlsArr.map((url) => url),
    };

    // Data Saving to Database
    try {
      let sendData = await fetch("/cms/uploadMedia", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
      let result = await sendData.json("");
      toast.success("Files has been uploaded successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Files has not been uploaded successfully.");
    }

    setStatus("");
    setIsSubmitting(false);
  };

  const uploadFiles = async (file) => {
    try {
      // Build the Cloudinary URL and form data for the upload

      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`;
      const uploadPreset = "vibemedia"; // Replace with your actual upload preset
      const mediaFiles = new FormData();
      mediaFiles.append("file", file);
      mediaFiles.append("upload_preset", uploadPreset);

      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: mediaFiles,
      });
      let res = await response.json("");
      if (!res.secure_url) {
        setStatus("Upload failed try again.");
        return;
      }
      return res;
    } catch (err) {
      console.error(err);
      setStatus(`Upload failed try again ${err}.`);
    }
  };

  useEffect(() => {
    // console.log(formData);
    // console.log(uploadedArr);
  }, [handleChange]);
  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: "black", color: "white" }}
      />
      <div className="relative container mx-auto p-4 mt-10">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-xl"></div>

        <div className="relative z-10 p-4 rounded-lg">
          <h1 className="text-2xl">Upload Vibe...</h1>
          <form onSubmit={submitForm} className="flex flex-col gap-4 mt-8">
            <label htmlFor="artist">Artist Name</label>
            <select
              name="artistName"
              className="p-3 bg-gray-600 rounded-md outline-none"
              onChange={handleChange}
              required
            >
              <option value="">Select Artist</option>
              <option value="unknown">Mix Songs</option>
              <option value="qari-waheed-zafar">Qari Waheed Zafar Qasmi</option>
              <option value="owais-raza-qadri">Owais Raza Qadri</option>
              <option value="junaid-jamshed">Junaid Jamshed</option>
              <option value="maher-zain">Maher Zain</option>
              <option value="amjad-sabri">Amjad Sabri</option>
              <option value="farhan-ali-qadri">Farhan Ali Qadri</option>
              <option value="hafiz-tahir-qadri">Hafiz Tahir Qadri</option>
              <option value="sami-yusuf">Sami Yusuf</option>
              <option value="qari-shahid-mehmood">Qari Shahid Mehmood</option>
              <option value="abdul-rauf-rufi">Abdul Rauf Rufi</option>
              <option value="hooria-rafiq">Hooria Rafiq</option>
              <option value="javeria-saleem">Javeria Saleem</option>
              <option value="mohammed-rafi">Mohammed Rafi</option>
              <option value="kishore-kumar">Kishore Kumar</option>
              <option value="asha-bhosle">Asha Bhosle</option>
              <option value="manna-dey">Manna Dey</option>
              <option value="mukesh">Mukesh</option>
              <option value="sp-balasubrahmanyam">S.P. Balasubrahmanyam</option>
              <option value="jagjit-singh">Jagjit Singh</option>
              <option value="rd-burman">R.D. Burman</option>
              <option value="alka-yagnik">Alka Yagnik</option>
              <option value="sonu-nigam">Sonu Nigam</option>
              <option value="shreya-ghoshal">Shreya Ghoshal</option>
              <option value="ar-rahman">A.R. Rahman</option>
              <option value="arijit-singh">Arijit Singh</option>
              <option value="atif-aslam">Atif Aslam</option>
              <option value="elvis-presley">Elvis Presley</option>
              <option value="aretha-franklin">Aretha Franklin</option>
              <option value="frank-sinatra">Frank Sinatra</option>
              <option value="whitney-houston">Whitney Houston</option>
              <option value="freddie-mercury">Freddie Mercury</option>
              <option value="adele">Adele</option>
              <option value="imagine-dragon">Imagine Dragon</option>
              <option value="ed-sheeran">Ed Sheeran</option>
              <option value="taylor-swift">Taylor Swift</option>
              <option value="justin-bieber">Justin Bieber</option>
              <option value="rihanna">Rihanna</option>
              <option value="selena-gomez">Selena Gomez</option>
              <option value="billie-eilish">Billie Eilish</option>
              <option value="ariana-grande">Ariana Grande</option>
            </select>

            <label htmlFor="artistImg">Artist Image</label>
            <input
              type="file"
              name="artistImg"
              accept="image/*"
              onChange={handleChange}
            />
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              name="files"
              required
              accept="audio/*"
              multiple
              onChange={handleChange}
            />
            <span>{status}</span>
            {isSubmitting ? (
              <button
                type="submit"
                disabled
                className="w-fit mt-6 flex items-center gap-2 bg-yellow-600 text-black px-4 py-3 rounded-lg transition hover:scale-90"
              >
                Please wait... <MdUpload />
              </button>
            ) : (
              <button
                type="submit"
                className="w-fit mt-6 flex items-center gap-2 bg-yellow-500 text-black px-4 py-3 rounded-lg transition hover:scale-90"
              >
                Upload Now <MdUpload />
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default page;

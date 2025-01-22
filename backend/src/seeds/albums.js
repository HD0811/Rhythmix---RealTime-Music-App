import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import { config } from "dotenv";

config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Clear existing data
    await Album.deleteMany({});
    await Song.deleteMany({});

    // First, create all songs
    const createdSongs = await Song.insertMany([
      {
        title: "Apna Bana Le",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/1.jpg",
        audioUrl: "/songs/01.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 204, // 03:24
      },
      {
        title: "Pal Pal Dil Ke Paas ",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/2.jpg",
        audioUrl: "/songs/02.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 262, // 04:22
      },
      {
        title: "Tainu Khabar Nahi ",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/3.jpg",
        audioUrl: "/songs/03.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 158, // 02:38
      },
      {
        title: "Ve Maahi",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/4.jpg",
        audioUrl: "/songs/04.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 234, // 03:54
      },
      {
        title: "Zaalima",
        artist: "Arijit Singh",
        imageUrl: "/cover-images/5.jpg",
        audioUrl: "/songs/05.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 171, // 02:51
      },

      // A R Rahman
      {
        title: "Tu Hai",
        artist: "A R Rahman",
        imageUrl: "/cover-images/6.jpg",
        audioUrl: "/songs/06.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 238, // 03:58
      },
      {
        title: "Luka Chuppi",
        artist: "A R Rahman",
        imageUrl: "/cover-images/7.jpg",
        audioUrl: "/songs/07.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 396, // 06:36
      },
      {
        title: "Kun Faaya Kun",
        artist: "A R Rahman",
        imageUrl: "/cover-images/8.jpg",
        audioUrl: "/songs/08.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 473, // 07:53
      },
      {
        title: "Nadaan Parindey",
        artist: "A R Rahman",
        imageUrl: "/cover-images/9.jpg",
        audioUrl: "/songs/09.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 387, // 06:27
      },
      {
        title: "Tere Bina",
        artist: "A R Rahman",
        imageUrl: "/cover-images/10.jpg",
        audioUrl: "/songs/10.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 309, // 05:09
      },

      // Asha Bhosle
      {
        title: "Hum Lakh Chupaye Pyaar Magar",
        artist: "Asha Bhosle",
        imageUrl: "/cover-images/11.jpg",
        audioUrl: "/songs/11.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 268, // 04:28
      },
      {
        title: "Jawani Janeman Haseen Dilruba",
        artist: "Asha Bhosle",
        imageUrl: "/cover-images/12.jpg",
        audioUrl: "/songs/12.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 316, // 05:16
      },
      {
        title: "Jhoomka Gira Re",
        artist: "Asha Bhosle",
        imageUrl: "/cover-images/13.jpg",
        audioUrl: "/songs/13.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 301, // 05:01
      },
      {
        title: "Peete Peete Kabhi Kabhi",
        artist: "Asha Bhosle",
        imageUrl: "/cover-images/14.jpg",
        audioUrl: "/songs/14.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 284, // 04:44
      },
      {
        title: "Tu Tu Hai Wahi",
        artist: "Asha Bhosle",
        imageUrl: "/cover-images/15.jpg",
        audioUrl: "/songs/15.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 409, // 06:49
      },

      // Atif Aslam
      {
        title: "Pehli Dafa",
        artist: "Atif Aslam",
        imageUrl: "/cover-images/16.jpg",
        audioUrl: "/songs/16.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 282, // 04:42
      },
      {
        title: "Tajdar-e-Haram",
        artist: "Atif Aslam",
        imageUrl: "/cover-images/17.jpg",
        audioUrl: "/songs/17.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 627, // 10:27
      },
      {
        title: "Dekhte Dekhte",
        artist: "Atif Aslam",
        imageUrl: "/cover-images/18.jpg",
        audioUrl: "/songs/18.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 260, // 04:20
      },
      {
        title: "Paniyon Sa",
        artist: "Atif Aslam",
        imageUrl: "/cover-images/19.jpg",
        audioUrl: "/songs/19.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 180, // 03:00
      },
      {
        title: "Tera Hua",
        artist: "Atif Aslam",
        imageUrl: "/cover-images/20.jpg",
        audioUrl: "/songs/20.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 231, // 03:51
      },

      // Diljit
      {
        title: "5 Taara",
        artist: "Diljit Dosanjh",
        imageUrl: "/cover-images/21.jpg",
        audioUrl: "/songs/21.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 224, // 03:44
      },
      {
        title: "Gulabi Pagg",
        artist: "Diljit Dosanjh",
        imageUrl: "/cover-images/22.jpg",
        audioUrl: "/songs/22.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 190, // 03:10
      },
      {
        title: "Thug Life",
        artist: "Diljit Dosanjh",
        imageUrl: "/cover-images/23.jpg",
        audioUrl: "/songs/23.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 167, // 02:47
      },
      {
        title: "Laembadgini",
        artist: "Diljit Dosanjh",
        imageUrl: "/cover-images/24.jpg",
        audioUrl: "/songs/24.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 338, // 05:38
      },
      {
        title: "Poh Di Raat",
        artist: "Diljit Dosanjh",
        imageUrl: "/cover-images/25.jpg",
        audioUrl: "/songs/25.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 233, // 03:53
      },

      // Kishore Kumar
      {
        title: "Dil Aisa Kisi Ne Mera Toda",
        artist: "Kishore Kumar",
        imageUrl: "/cover-images/26.jpg",
        audioUrl: "/songs/26.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 306, // 05:06
      },
      {
        title: "Kora Kagaz Tha Yeh Man Mera",
        artist: "Kishore Kumar",
        imageUrl: "/cover-images/27.jpg",
        audioUrl: "/songs/27.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 316, // 05:16
      },
      {
        title: "Nainon Men Sapna",
        artist: "Kishore Kumar",
        imageUrl: "/cover-images/28.jpg",
        audioUrl: "/songs/28.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 353, // 05:53
      },
      {
        title: "O MERE DIL KE CHAIN",
        artist: "Kishore Kumar",
        imageUrl: "/cover-images/29.jpg",
        audioUrl: "/songs/29.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 269, // 04:29
      },
      {
        title: "Yeh Shaam Mastani",
        artist: "Kishore Kumar",
        imageUrl: "/cover-images/30.jpg",
        audioUrl: "/songs/30.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 244, // 04:04
      },

      // Kumar Sanu
      {
        title: "Chand ki chandni Aasmaan ki pari",
        artist: "Kumar Sanu",
        imageUrl: "/cover-images/31.jpg",
        audioUrl: "/songs/31.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 304, // 05:04
      },
      {
        title: "Kaise Main Sambhalu Chunar Dhalke",
        artist: "Kumar Sanu",
        imageUrl: "/cover-images/32.jpg",
        audioUrl: "/songs/32.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 308, // 05:08
      },
      {
        title: "Maine Yeh Dil Tumko Diya",
        artist: "Kumar Sanu",
        imageUrl: "/cover-images/33.jpg",
        audioUrl: "/songs/33.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 340, // 05:40
      },
      {
        title: "Meri Sans Sans Mere Yaar Ke Liye Hai",
        artist: "Kumar Sanu",
        imageUrl: "/cover-images/34.jpg",
        audioUrl: "/songs/34.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 384, // 06:24
      },
      {
        title: "Yeh Dil Ye Pagal Dil Mera",
        artist: "Kumar Sanu",
        imageUrl: "/cover-images/35.jpg",
        audioUrl: "/songs/35.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 410, // 06:50
      },

      // Lata Mangeshkar
      {
        title: "Aandhi",
        artist: "Lata Mangeshkar",
        imageUrl: "/cover-images/36.jpg",
        audioUrl: "/songs/36.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 354, // 05:54
      },
      {
        title: "Dil To Pagal Hai",
        artist: "Lata Mangeshkar",
        imageUrl: "/cover-images/37.jpg",
        audioUrl: "/songs/37.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 339, // 05:39
      },
      {
        title: "Tujhe Dekha To Jana",
        artist: "Lata Mangeshkar",
        imageUrl: "/cover-images/38.jpg",
        audioUrl: "/songs/38.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 401, // 06:41
      },
      {
        title: "Yeh Dil Tum Bin Lagta",
        artist: "Lata Mangeshkar",
        imageUrl: "/cover-images/39.jpg",
        audioUrl: "/songs/39.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 351, // 05:51
      },
      {
        title: "Dekha Ek Khwab To",
        artist: "Lata Mangeshkar",
        imageUrl: "/cover-images/40.jpg",
        audioUrl: "/songs/40.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 322, // 05:22
      },

      // Shreya Ghoshal
      {
        title: "Sun Raha Hai Na Tu",
        artist: "Shreya Ghoshal",
        imageUrl: "/cover-images/41.jpg",
        audioUrl: "/songs/41.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 229, // 03:49
      },
      {
        title: "Teri Meri Prem Kahani",
        artist: "Shreya Ghoshal",
        imageUrl: "/cover-images/42.jpg",
        audioUrl: "/songs/42.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 195, // 03:15
      },
      {
        title: "Jeene Laga Hoon",
        artist: "Shreya Ghoshal",
        imageUrl: "/cover-images/43.jpg",
        audioUrl: "/songs/43.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 201, // 03:21
      },
      {
        title: "Nagada Sang Dhol",
        artist: "Shreya Ghoshal",
        imageUrl: "/cover-images/44.jpg",
        audioUrl: "/songs/44.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 295, // 04:55
      },
      {
        title: "Naina Re",
        artist: "Shreya Ghoshal",
        imageUrl: "/cover-images/45.jpg",
        audioUrl: "/songs/45.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 222, // 03:42
      },

      // Udit Narayan
      {
        title: "Aye Mere Humsafar",
        artist: "Udit Narayan",
        imageUrl: "/cover-images/46.jpg",
        audioUrl: "/songs/46.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 313, // 05:13
      },
      {
        title: "Gazab Ka Hai Din",
        artist: "Udit Narayan",
        imageUrl: "/cover-images/47.jpg",
        audioUrl: "/songs/47.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 263, // 04:23
      },
      {
        title: "Ho Gaya Hai Tujhko ",
        artist: "Udit Narayan",
        imageUrl: "/cover-images/48.jpg",
        audioUrl: "/songs/48.m4a",
        plays: Math.floor(Math.random() * 5000),
        duration: 346, // 05:46
      },
      {
        title: "Jaadu Teri Nazar",
        artist: "Udit Narayan",
        imageUrl: "/cover-images/49.jpg",
        audioUrl: "/songs/49.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 157, // 02:37
      },
      {
        title: "Yeh Ladka Hai Allah",
        artist: "Udit Narayan",
        imageUrl: "/cover-images/50.jpg",
        audioUrl: "/songs/50.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 312, // 05:12
      },

      // Sonu Nigam
      {
        title: "Bole Chudiyan",
        artist: "Sonu Nigam",
        imageUrl: "/cover-images/51.jpg",
        audioUrl: "/songs/51.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 403, // 06:43
      },
      {
        title: "Sau Dard ",
        artist: "Sonu Nigam",
        imageUrl: "/cover-images/52.jpg",
        audioUrl: "/songs/52.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 294, // 04:54
      },
      {
        title: "Kal Ho Naa Ho",
        artist: "Sonu Nigam",
        imageUrl: "/cover-images/53.jpg",
        audioUrl: "/songs/53.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 287, // 04:47
      },
      {
        title: "Crazy Dil",
        artist: "Sonu Nigam",
        imageUrl: "/cover-images/54.jpg",
        audioUrl: "/songs/54.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 362, // 06:02
      },
      {
        title: "Suraj Hua Maddham",
        artist: "Sonu Nigam",
        imageUrl: "/cover-images/55.jpg",
        audioUrl: "/songs/55.mp3",
        plays: Math.floor(Math.random() * 5000),
        duration: 477, // 07:57
      },
    ]);

    // Create albums with references to song IDs
    const albums = [
      {
        title: "Hits Of Arijit Singh",
        artist: "Arijit Singh",
        imageUrl: "/albums/1.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(0, 5).map((song) => song._id),
      },
      {
        title: "Best Of A R Rahman",
        artist: "A R Rahman",
        imageUrl: "/albums/2.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(5, 10).map((song) => song._id),
      },
      {
        title: "Superhits Of Asha Bhosle",
        artist: "Asha Bhosle",
        imageUrl: "/albums/3.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(10, 15).map((song) => song._id),
      },
      {
        title: "Hits Of Atif Aslam",
        artist: "Atif Aslam",
        imageUrl: "/albums/4.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(15, 20).map((song) => song._id),
      },
      {
        title: "Hits Of Diljit Dosanjh",
        artist: "Diljit Dosanjh",
        imageUrl: "/albums/5.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(20, 25).map((song) => song._id),
      },
      {
        title: "Best Of Kishore Kumar",
        artist: "Kishore Kumar",
        imageUrl: "/albums/6.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(25, 30).map((song) => song._id),
      },
      {
        title: "Hits Of Kumar Sanu",
        artist: "Kumar Sanu",
        imageUrl: "/albums/7.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(30, 35).map((song) => song._id),
      },
      {
        title: "Superhits Of Lata Mangeshkar",
        artist: "Lata Mangeshkar",
        imageUrl: "/albums/8.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(35, 40).map((song) => song._id),
      },
      {
        title: "Best Of Shreya Ghoshal",
        artist: "Shreya Ghoshal",
        imageUrl: "/albums/9.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(40, 45).map((song) => song._id),
      },
      {
        title: "Hits Of Udit Narayan",
        artist: "Udit Narayan",
        imageUrl: "/albums/10.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(45, 50).map((song) => song._id),
      },
      {
        title: "Hits Of Sonu Nigam",
        artist: "Sonu Nigam",
        imageUrl: "/albums/11.jpg",
        releaseYear: 2023,
        songs: createdSongs.slice(50, 55).map((song) => song._id),
      },
    ];

    // Insert all albums
    const createdAlbums = await Album.insertMany(albums);

    // Update songs with their album references
    for (let i = 0; i < createdAlbums.length; i++) {
      const album = createdAlbums[i];
      const albumSongs = albums[i].songs;

      await Song.updateMany(
        { _id: { $in: albumSongs } },
        { albumId: album._id }
      );
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();

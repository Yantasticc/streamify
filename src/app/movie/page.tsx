import styles from '@/app/styles/common.module.css'
import React from 'react'
import MovieCard from "@/app/components/MovieCard";

const page = async() => {

  const url = process.env.RAPID_KEY;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b5c4a7875amsh8e4fbae4215f580p145c8ejsne6cb01221880',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(main_data.jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default page

/* eslint-disable @next/next/no-img-element */
import moment from "moment"

export default function CardMovie(props) {
    return (
        <>
            {props.data ? props.data.map(result => (
                <div key={result.mal_id}>
                    <div className="max-w-md mx-auto hover:shadow-xl overflow-hidden md:max-w-7xl rounded-3xl bg-black">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                            <a href={result.url} rel="noreferrer" target="_blank"><img className="w-full h-full rounded-2xl" src={result.images.webp.large_image_url} alt={result.title} /></a>
                            </div>
                            <div className="p-8">
                                <div className="tracking-wide text-sm text-indigo-500 font-semibold capitalize">compelted on: {moment(result.aired.from).format("ddd, DD-M-YYYY")} | {result.status}</div>
                                <a href={result.url} rel="noreferrer" target="_blank" className="block mt-2 text-xl leading-tight font-medium font-semibold transition duration-500 ease-in-out text-cyan-600 capitalize">{result.title} ({result.title_japanese ? result.title_japanese :"there's no japanese title"})</a>
                                <p className="mt-1 text-gray-500 indent-5">{result.synopsis ? result.synopsis:"not have synopsis yet"}<div className="mt-8"></div><div className="mt-1"></div>Episode: {result.episodes ? result.episodes:"null"}<div className="mt-1"></div>Type: {result.type ? result.type:"null"}<div className="mt-1"></div>Rating: {result.rating ? result.rating:"null"}
                                <div className="mt-1"></div>Genre&apos;s:<br/>{result.genres ? result.genres.map(genre => (<li key={genre.mal_id}>{genre.name}</li>)):"null"}
                                Trailer: {result.trailer.url ? <a href={result.trailer.url} className="font-bold text-cyan-500">Click Me</a>:"There's not trailer about "+result.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10"></div>
                </div>
            )):""}
            <br />
            <br />
        </>
    )
}

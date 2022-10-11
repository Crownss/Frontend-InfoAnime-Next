/* eslint-disable @next/next/no-img-element */
import moment from "moment"

export default function CardRandom(props){
    return (
        <>
                <div key={props.data.mal_id}>
                    <div className="max-w-md mx-auto hover:shadow-xl overflow-hidden md:max-w-7xl rounded-3xl bg-black">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                            <a href={props.data.url} rel="noreferrer" target="_blank"><img className="w-full h-full rounded-2xl" src={props.data.images.webp.large_image_url} alt={props.data.title} /></a>
                            </div>
                            <div className="p-8">
                                <div className="tracking-wide text-sm text-indigo-500 font-semibold capitalize">compelted on: {moment(props.data.aired.from).format("ddd, DD-M-YYYY")} | {props.data.status}</div>
                                <a href={props.data.url} rel="noreferrer" target="_blank" className="block mt-2 text-xl leading-tight font-medium font-semibold transition duration-500 ease-in-out text-cyan-600 capitalize">{props.data.title} ({props.data.title_japanese ? props.data.title_japanese :"there's no japanese title"})</a>
                                <p className="mt-1 text-gray-500 indent-5">{props.data.synopsis ? props.data.synopsis:"not have synopsis yet"}<div className="mt-8"></div><div className="mt-1"></div>Episode: {props.data.episodes ? props.data.episodes:"null"}<div className="mt-1"></div>Type: {props.data.type ? props.data.type:"null"}<div className="mt-1"></div>Rating: {props.data.rating ? props.data.rating:"null"}
                                <div className="mt-1"></div>Genre&apos;s:<br/>{props.data.genres ? props.data.genres.map(genre => (<li key={genre.mal_id}>{genre.name}</li>)):"null"}
                                Trailer: {props.data.trailer.url ? <a href={props.data.trailer.url} className="font-bold text-cyan-500">Click Me</a>:"There's not trailer about "+props.data.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10"></div>
                </div>
            <br />
            <br />
        </>
    )
}
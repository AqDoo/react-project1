import { ways } from "../data"
import WayToTeach from "./WayToTeach"

export default function BaseSection() {
    return (
        <section>
        <h1>Өндіріс орындарына қажетті жоғары білікті мамандар даярлау</h1>
        <h4>Сәтбаев университеті – өнеркәсіпке, күрделі жобаларға және әлемдік дәрежедегі команда құруға қажетті мамандар даярлау үшін арнайы бағдарламалар әзірлейтін Қазақстандағы ең ірі ғылыми-әдістемелік орталық.</h4>

        <ul>
          {ways.map((way) => ( <WayToTeach key ={way.title} {...way}/>) )}
          </ul>
      </section>
    )
}
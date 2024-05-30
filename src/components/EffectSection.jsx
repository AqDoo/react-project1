import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useEffect, useState } from "react";
import User from "./User";

export default function EffectSection() {

    const [modal, setModal] = useState(false)
    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useState([])

    async function fetchUsers() {
       const response = await fetch('https://jsonplaceholder.typicode.com/users')
       const users =await response.json()
       setUsers(users)
       setLoading(false)
    }

    useEffect(()=> {
        fetchUsers()
    }, [])

    return (
        <section>
            <h3>Effects</h3>

            <Button style ={{marginBottom: '1rem'}}onClick={()=> setModal(true)}>Ақпарат ашу</Button>
            <Modal open={modal}>
                <h3>Холдинг Satbayev University</h3>
                <p>Старейший и один из самых престижных технических университетов в Казахстане, 
                известный разработками в области горнорудного и нефтяного дела. 
                Более 80 лет этот вуз является синонимом технического прогресса и лидерства в Казахстане
                И хотя в визитной карточке Satbayev University превалируют технические специальности, 
                это многопрофильный университет, где можно изучать также архитектуру и менеджмент.
                </p>
                <Button onClick={() => setModal(false)}>Жабу</Button>
            </Modal>

            {loading && <p>Loading...</p>}

            {!loading && <ul>
                {users.map(user => ( <User key={user.id} {...user}/>))}
                </ul>}
        </section>
    )
}
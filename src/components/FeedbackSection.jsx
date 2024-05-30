import Button from "./Button/Button"
import { useState } from "react"

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help',
    })

    
    function handleNameChange(event) {
           setForm((prev) => ({
            ... prev,
            name: event.target.value,
            hasError: event.target.value.trim().length == 0,
        }))
    }


    
    return (
        <section>
            <h3>Байланыс</h3>

            <form>
                <label htmlFor="name">Сіздің атыңыз</label>
                <input type="text" id="name" className="control" value={form.name} style={{
                    border: form.hasError ? '1px solid red' : null,
                }} onChange={handleNameChange} />

                <label htmlFor="reason">Байланыстың себебі</label>
                <select id="reason" className="control" value={form.reason} onChange={(event)=> setForm(prev => ({... prev, reason: event.target.value}))}>
                    <option value="error">Қателік</option>
                    <option value="help">Көмек керек</option>
                    <option value="suggest">Ұсыныс</option>                
                </select>


                <Button disabled = {form.hasError} isActive={!form.hasError}>жіберу</Button>
            </form>
        </section>
    )
}
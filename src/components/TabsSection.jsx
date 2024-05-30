import Button from "./Button/Button"

export default function TabsSection({active, onChange}) {
    return(
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active == 'main'} onClick ={() => onChange('main')}>Басты</Button>
            <Button isActive={active == 'feedback'} onClick ={() => onChange('feedback')}>Байланыс</Button>
            <Button isActive={active == 'effect'} onClick ={() => onChange('effect')}>Универ туралы</Button>
        </section>
    )
}
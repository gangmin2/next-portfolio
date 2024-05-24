export default function ContactBox({ icon, txt, link }) {
    return (
        <a href={link} target="_blank">
            <div className="contact-box" style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '16px', }}>
                <img src={icon} style={{ width: '70%', marginBottom: '32px', }} />
                <p>{txt}</p>
            </div>
        </a>
    )
}
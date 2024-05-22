import ContactBox from './contact-box';

export default function Page() {
	const myInfo = [
		{
			id: 0,
			icon: "https://cdn-icons-png.flaticon.com/512/7718/7718904.png",
			txt: "min0115b@gmail.com",
			link: "mailto:min0115b@gmail.com",
		},
		{
			id: 1,
			icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
			txt: "GitHub",
			link: "https://github.com/gangmin2",
		},
		{
			id: 2,
			icon: "https://cdn.icon-icons.com/icons2/2073/PNG/512/location_map_twitter_icon_127126.png",
			txt: "Pohang, Republic of Korea",
			link: "https://www.google.co.kr/maps/place/%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84+%ED%8F%AC%ED%95%AD%EC%8B%9C/data=!3m1!4b1!4m6!3m5!1s0x3566fdbac093c233:0xc8e2367ce884d47e!8m2!3d36.0929227!4d129.3052666!16zL20vMDF3NmNs?hl=ko&entry=ttu",
		},
		{
			id: 3,
			icon: "https://cdn-icons-png.flaticon.com/512/7044/7044607.png",
			txt: "010-3929-9466",
			link: "tel:010-3929-9466"
		},
	]
	return (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', padding: '120px'}}>
			{myInfo.map(info => <ContactBox key={info.id} icon={info.icon} txt={info.txt} link={info.link} />)}
		</div>
	)
}
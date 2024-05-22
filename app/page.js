'use client';

import Lottie from 'react-lottie-player';
import lottieJson from '../public/animation.json';

export default function Page() {
	return (
		<>
			<section className='text-center'>
				<h1 className='text-blue-600 text-8xl font-black mb-20 mt-10' style={{}}>Hello, I'm nuing</h1>
			</section>
			<section className='flex justify-center'>
				<div className='grow-1 m-16'>
					<h2 className='text-blue-600 font-bold' style={{ fontSize: '48px', }}>I'm Front-end Developer</h2>
					<p style={{ fontSize: '18px', marginTop: '16px', }}>모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다.</p>
					<p style={{ fontSize: '18px', marginTop: '16px', }}>정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다. 모든 국민은 보건에 관하여 국가의 보호를 받는다.</p>
				</div>
				<div className='grow-1 m-16'>
					<Lottie
						loop
						animationData={lottieJson}
						play
					/>
				</div>
			</section>
		</>
	)
}
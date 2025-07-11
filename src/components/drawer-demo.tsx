import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

// Individual Card Components
const BasicPlanCard = () => (
	<div className="p-4 flex justify-center h-full">
		<div className="w-full max-w-sm h-full">
			<div className={cn(
				"relative rounded-2xl p-4 w-full h-full flex flex-col",
				"bg-gradient-to-br shadow-xl border border-white/20",
				"backdrop-blur-sm from-blue-400 to-blue-600"
			)}>
				<div className="text-center mb-3 text-white">
					<h3 className="text-lg font-bold mb-1">الباقة الأساسية</h3>
					<p className="text-xs opacity-90 mb-2">للأفراد والشركات الناشئة</p>
					
					<div className="mb-2">
						<div className="flex items-baseline justify-center gap-1">
							<span className="text-2xl font-bold">99</span>
							<span className="text-sm">ريال</span>
							<span className="text-xs opacity-75">/شهرياً</span>
						</div>
					</div>
				</div>

				<div className="flex-1 mb-3 overflow-hidden">
					<div className="h-full overflow-y-auto">
						<ul className="space-y-1">
							{["حتى 1,000 معاملة شهرياً", "لوحة تحكم أساسية", "دعم فني عبر البريد الإلكتروني", "تقارير أساسية", "تشفير SSL المتقدم", "تكامل مع 5 منصات"].slice(0, 6).map((feature, index) => (
								<li key={index} className="flex items-center text-white text-xs">
									<svg className="w-3 h-3 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="leading-tight">{feature}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<Button className="w-full text-sm font-semibold py-2 rounded-lg transition-all duration-200 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30">
					ابدأ الآن
				</Button>
			</div>
		</div>
	</div>
)

const ProfessionalPlanCard = () => (
	<div className="p-4 flex justify-center h-full">
		<div className="w-full max-w-sm h-full">
			<div className={cn(
				"relative rounded-2xl p-4 w-full h-full flex flex-col",
				"bg-gradient-to-br shadow-xl border border-white/20",
				"backdrop-blur-sm from-purple-500 to-pink-500"
			)}>
				<div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
					<span className="bg-white text-purple-600 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
						الأكثر شعبية
					</span>
				</div>
				
				<div className="text-center mb-3 text-white">
					<h3 className="text-lg font-bold mb-1">الباقة الاحترافية</h3>
					<p className="text-xs opacity-90 mb-2">للشركات المتوسطة</p>
					
					<div className="mb-2">
						<div className="flex items-baseline justify-center gap-1">
							<span className="text-2xl font-bold">299</span>
							<span className="text-sm">ريال</span>
							<span className="text-xs opacity-75">/شهرياً</span>
						</div>
					</div>
				</div>

				<div className="flex-1 mb-3 overflow-hidden">
					<div className="h-full overflow-y-auto">
						<ul className="space-y-1">
							{["حتى 10,000 معاملة شهرياً", "لوحة تحكم متقدمة", "دعم فني على مدار الساعة", "تقارير تفصيلية وتحليلات", "حماية من الاحتيال", "تكامل مع 20 منصة"].slice(0, 6).map((feature, index) => (
								<li key={index} className="flex items-center text-white text-xs">
									<svg className="w-3 h-3 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="leading-tight">{feature}</span>
								</li>
							))}
							<li className="text-white text-xs opacity-75 text-center pt-1">
								+ 2 ميزة إضافية
							</li>
						</ul>
					</div>
				</div>

				<Button className="w-full text-sm font-semibold py-2 rounded-lg transition-all duration-200 bg-white text-purple-600 hover:bg-gray-100 shadow-lg">
					الأكثر شعبية
				</Button>
			</div>
		</div>
	</div>
)

const EnterprisePlanCard = () => (
	<div className="p-4 flex justify-center h-full">
		<div className="w-full max-w-sm h-full">
			<div className={cn(
				"relative rounded-2xl p-4 w-full h-full flex flex-col",
				"bg-gradient-to-br shadow-xl border border-white/20",
				"backdrop-blur-sm from-amber-400 to-orange-500"
			)}>
				<div className="text-center mb-3 text-white">
					<h3 className="text-lg font-bold mb-1">الباقة المؤسسية</h3>
					<p className="text-xs opacity-90 mb-2">للشركات الكبيرة</p>
					
					<div className="mb-2">
						<div className="flex items-baseline justify-center gap-1">
							<span className="text-2xl font-bold">999</span>
							<span className="text-sm">ريال</span>
							<span className="text-xs opacity-75">/شهرياً</span>
						</div>
					</div>
				</div>

				<div className="flex-1 mb-3 overflow-hidden">
					<div className="h-full overflow-y-auto">
						<ul className="space-y-1">
							{["معاملات غير محدودة", "لوحة تحكم مخصصة", "مدير حساب مخصص", "تقارير مخصصة وAPI متقدم", "حماية متقدمة من الاحتيال", "تكامل غير محدود"].slice(0, 6).map((feature, index) => (
								<li key={index} className="flex items-center text-white text-xs">
									<svg className="w-3 h-3 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="leading-tight">{feature}</span>
								</li>
							))}
							<li className="text-white text-xs opacity-75 text-center pt-1">
								+ 3 ميزة إضافية
							</li>
						</ul>
					</div>
				</div>

				<Button className="w-full text-sm font-semibold py-2 rounded-lg transition-all duration-200 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30">
					تواصل معنا
				</Button>
			</div>
		</div>
	</div>
)

const CustomPlanCard = () => (
	<div className="p-4 flex justify-center h-full">
		<div className="w-full max-w-sm h-full">
			<div className={cn(
				"relative rounded-2xl p-4 w-full h-full flex flex-col",
				"bg-gradient-to-br shadow-xl border border-white/20",
				"backdrop-blur-sm from-emerald-400 to-cyan-500"
			)}>
				<div className="text-center mb-3 text-white">
					<h3 className="text-lg font-bold mb-1">الباقة المخصصة</h3>
					<p className="text-xs opacity-90 mb-2">حلول مخصصة لاحتياجاتك</p>
					
					<div className="mb-2">
						<div className="text-lg font-bold">حسب الطلب</div>
					</div>
				</div>

				<div className="flex-1 mb-3 overflow-hidden">
					<div className="h-full overflow-y-auto">
						<ul className="space-y-1">
							{["حلول مخصصة بالكامل", "تطوير ميزات خاصة", "تكامل مخصص", "استضافة مخصصة", "امتثال مخصص", "تدريب شامل للفريق"].slice(0, 6).map((feature, index) => (
								<li key={index} className="flex items-center text-white text-xs">
									<svg className="w-3 h-3 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="leading-tight">{feature}</span>
								</li>
							))}
							<li className="text-white text-xs opacity-75 text-center pt-1">
								+ 2 ميزة إضافية
							</li>
						</ul>
					</div>
				</div>

				<Button className="w-full text-sm font-semibold py-2 rounded-lg transition-all duration-200 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30">
					احصل على عرض سعر
				</Button>
			</div>
		</div>
	</div>
)

export function DrawerDemo() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		direction: 'rtl',
		loop: false,
		align: 'start',
	})
	const [currentSlide, setCurrentSlide] = useState(0)

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setCurrentSlide(emblaApi.selectedScrollSnap())
	}, [emblaApi])
	
	useEffect(() => {
		if (!emblaApi) return
		onSelect()
		emblaApi.on('select', onSelect)
	}, [emblaApi, onSelect])
	
	return (
		<Drawer shouldScaleBackground>
			<DrawerTrigger
				render={(props) => <Button {...props}>خطط الأسعار</Button>}
			/>
			<DrawerContent className="h-[95vh]">
				<div className="mx-auto w-full max-w-md h-full flex flex-col">
					<DrawerHeader>
						<DrawerTitle className="text-center">
							باقات الاشتراك
						</DrawerTitle>
						<DrawerDescription className="text-center">
							اختر الباقة المناسبة لاحتياجاتك
						</DrawerDescription>
					</DrawerHeader>

					<div className="flex flex-col gap-4 px-4 flex-1 overflow-hidden" dir="rtl">
						<div className="embla overflow-hidden flex-1" ref={emblaRef}>
							<div className="embla__container flex h-full">
								<div className="embla__slide flex-shrink-0 flex-grow-0 basis-full min-w-0">
									<BasicPlanCard />
								</div>
								<div className="embla__slide flex-shrink-0 flex-grow-0 basis-full min-w-0">
									<ProfessionalPlanCard />
								</div>
								<div className="embla__slide flex-shrink-0 flex-grow-0 basis-full min-w-0">
									<EnterprisePlanCard />
								</div>
								<div className="embla__slide flex-shrink-0 flex-grow-0 basis-full min-w-0">
									<CustomPlanCard />
								</div>
							</div>
						</div>
						
						{/* Slide indicators */}
						<div className="flex justify-center mb-4 gap-2">
							{[0, 1, 2, 3].map((index) => (
								<span
									key={index}
									className={cn(
										"size-2 rounded-full transition-colors cursor-pointer",
										index === currentSlide ? 'bg-black' : 'bg-gray-200'
									)}
									onClick={() => emblaApi?.scrollTo(index)}
								></span>
							))}
						</div>
					</div>

					{/* <DrawerFooter>
						<DrawerClose
							render={(props) => (
								<Button {...props} variant="outline" className="w-full">
									إغلاق
								</Button>
							)}
						/>
					</DrawerFooter> */}
				</div>
			</DrawerContent>
		</Drawer>
	)
}

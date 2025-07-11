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

const pricingPlans = [
  {
    name: "الباقة الأساسية",
    subtitle: "للأفراد والشركات الناشئة",
    price: "99",
    currency: "ريال",
    period: "شهرياً",
    popular: false,
    features: [
      "حتى 1,000 معاملة شهرياً",
      "لوحة تحكم أساسية",
      "دعم فني عبر البريد الإلكتروني",
      "تقارير أساسية",
      "تشفير SSL المتقدم",
      "تكامل مع 5 منصات"
    ],
    buttonText: "ابدأ الآن",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    name: "الباقة الاحترافية",
    subtitle: "للشركات المتوسطة",
    price: "299",
    currency: "ريال",
    period: "شهرياً",
    popular: true,
    features: [
      "حتى 10,000 معاملة شهرياً",
      "لوحة تحكم متقدمة",
      "دعم فني على مدار الساعة",
      "تقارير تفصيلية وتحليلات",
      "حماية من الاحتيال",
      "تكامل مع 20 منصة",
      "إدارة الفريق",
      "خصومات حجم المعاملات"
    ],
    buttonText: "الأكثر شعبية",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "الباقة المؤسسية",
    subtitle: "للشركات الكبيرة",
    price: "999",
    currency: "ريال",
    period: "شهرياً",
    popular: false,
    features: [
      "معاملات غير محدودة",
      "لوحة تحكم مخصصة",
      "مدير حساب مخصص",
      "تقارير مخصصة وAPI متقدم",
      "حماية متقدمة من الاحتيال",
      "تكامل غير محدود",
      "إدارة متقدمة للمستخدمين",
      "دعم أولوية قصوى",
      "تدريب مخصص"
    ],
    buttonText: "تواصل معنا",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    name: "الباقة المخصصة",
    subtitle: "حلول مخصصة لاحتياجاتك",
    price: "حسب الطلب",
    currency: "",
    period: "",
    popular: false,
    features: [
      "حلول مخصصة بالكامل",
      "تطوير ميزات خاصة",
      "تكامل مخصص",
      "استضافة مخصصة",
      "امتثال مخصص",
      "تدريب شامل للفريق",
      "دعم على مستوى المؤسسة",
      "اتفاقية مستوى خدمة مخصصة"
    ],
    buttonText: "احصل على عرض سعر",
    gradient: "from-emerald-400 to-cyan-500"
  }
]

export function DrawerDemo() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ 
		direction: 'rtl',
		loop: false,
		align: 'start'
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
				<div className="mx-auto w-full max-w-md">
					<DrawerHeader>
						<DrawerTitle className="text-center">
							باقات الاشتراك
						</DrawerTitle>
						<DrawerDescription className="text-center">
							اختر الباقة المناسبة لاحتياجاتك
						</DrawerDescription>
					</DrawerHeader>

					<div className="flex flex-col gap-4 px-4 flex-1 overflow-hidden" dir="rtl">
						<div className="embla overflow-hidden" ref={emblaRef}>
							<div className="embla__container flex">
								{pricingPlans.map((plan, index) => (
									<div key={index} className="embla__slide flex-shrink-0 flex-grow-0 basis-full min-w-0">
										<div className="p-4 flex justify-center">
											<div 
												className="w-full max-w-sm"
												style={{ aspectRatio: '1.78/1' }}
											>
												<div className={cn(
													"relative rounded-2xl p-4 w-full h-full flex flex-col",
													"bg-gradient-to-br shadow-xl border border-white/20",
													"backdrop-blur-sm",
													plan.gradient
												)}>
													{plan.popular && (
														<div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
															<span className="bg-white text-purple-600 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
																الأكثر شعبية
															</span>
														</div>
													)}
													
													<div className="text-center mb-3 text-white">
														<h3 className="text-lg font-bold mb-1">{plan.name}</h3>
														<p className="text-xs opacity-90 mb-2">{plan.subtitle}</p>
														
														<div className="mb-2">
															{plan.price === "حسب الطلب" ? (
																<div className="text-lg font-bold">{plan.price}</div>
															) : (
																<div className="flex items-baseline justify-center gap-1">
																	<span className="text-2xl font-bold">{plan.price}</span>
																	<span className="text-sm">{plan.currency}</span>
																	<span className="text-xs opacity-75">/{plan.period}</span>
																</div>
															)}
														</div>
													</div>

													<div className="flex-1 mb-3 overflow-hidden">
														<div className="h-full overflow-y-auto">
															<ul className="space-y-1">
																{plan.features.slice(0, 6).map((feature, featureIndex) => (
																	<li key={featureIndex} className="flex items-center text-white text-xs">
																		<svg className="w-3 h-3 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
																			<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
																		</svg>
																		<span className="leading-tight">{feature}</span>
																	</li>
																))}
																{plan.features.length > 6 && (
																	<li className="text-white text-xs opacity-75 text-center pt-1">
																		+ {plan.features.length - 6} ميزة إضافية
																	</li>
																)}
															</ul>
														</div>
													</div>

													<Button 
														className={cn(
															"w-full text-sm font-semibold py-2 rounded-lg transition-all duration-200",
															plan.popular 
																? "bg-white text-purple-600 hover:bg-gray-100 shadow-lg" 
																: "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30"
														)}
													>
														{plan.buttonText}
													</Button>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						
						{/* Slide indicators */}
						<div className="flex justify-center mb-4 gap-2">
							{pricingPlans.map((_, index) => (
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

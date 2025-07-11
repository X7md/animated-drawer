import { useRef } from 'react'
import './App.css'
import { DrawerDemo, type DrawerDemoHandle } from '@/components/drawer-demo'
import { Button } from './components/ui/button'

function App() {
	const drawerRef = useRef<DrawerDemoHandle>(null)

	return (
		<div className="p-8 flex flex-col items-center gap-8">
			<h1 className="text-2xl font-bold">Drawer Control Demo</h1>
			<Button onClick={() => drawerRef.current?.open()}>
				Open Drawer from Parent
			</Button>
			<DrawerDemo ref={drawerRef} openOnLoad />
		</div>
	)
}

export default App

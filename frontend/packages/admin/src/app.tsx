import { Routes } from "react-router-dom";
import { RouterHelper } from "src/service";
import { OptionsDrawer, OptionsFloatBtn } from "./components";
import { useFlat } from "./service";
import RiveLoading from "plugins/moderate-plugin-rive/common/components/riveLoading";
const App = () => {
	const { isLoading, activeTabKey, isShowMdDrawer } = useFlat("appStore", {
		isLoading: ".",
		currentTheme: ".",
		activeTabKey: ".",
		isShowMdDrawer: ".",
	});

	const { routesTree } = useFlat("routerStore");
	return (
		<>
			<Routes>
				{routesTree.map((item) => {
					return RouterHelper.toRenderRouteLoop(item);
				})}
			</Routes>
			{activeTabKey}
			{isShowMdDrawer}
			<>
				<OptionsFloatBtn />
				<OptionsDrawer />
			</>
			{isLoading && (
				<div className="loading g-glossy">
					<RiveLoading />
				</div>
			)}
		</>
	);
};

export default App;

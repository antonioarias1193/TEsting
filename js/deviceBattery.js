// ================= Scrolling down effect ===================
window.addEventListener("scroll", function () {
	var battery_onscroll = document.querySelector(".battery_onscroll");
	var pill_battery = document.querySelector(".Bpill_onscroll");
	var percentage_battery = document.querySelector(".Bpercentage_onscroll");
	var status_battery = document.querySelector(".Bstatus_onscroll");

	// battery devices scroll
	if (window.scrollY < 5) {
		battery_onscroll.classList.remove("battery_onscroll-scroll");
	} else {
		battery_onscroll.classList.add("battery_onscroll-scroll");
	}
	// battery Pill scroll
	if (window.scrollY < 5) {
		pill_battery.classList.add("Bpill");
		pill_battery.classList.remove("Bpill_smallscroll");
	} else {
		pill_battery.classList.remove("Bpill");
		pill_battery.classList.add("Bpill_smallscroll");
	}

	// battery Percentages scroll
	if (window.scrollY < 5) {
		percentage_battery.classList.add("Bpercentage");
		percentage_battery.classList.remove("Bpercentage_smallscroll");
	} else {
		percentage_battery.classList.remove("Bpercentage");
		percentage_battery.classList.add("Bpercentage_smallscroll");
	}
	// battery Status scroll
	if (window.scrollY < 5) {
		status_battery.classList.add("Bstatus");
		status_battery.classList.remove("Bstatus_smallscroll");
	} else {
		status_battery.classList.remove("Bstatus");
		status_battery.classList.add("Bstatus_smallscroll");
	}
});
// ================= Scrolling down effect ===================

// ================= Battery Configuration ===================
initBattery();

function initBattery() {
	// Get Element Html
	const batteryLiquid = document.querySelector(".Bliquid");
	const batteryStatus = document.querySelector(".Bstatus");
	const Bpercentage = document.querySelector(".Bpercentage");
	// Get Element Html

	// Battery Navigator
	// 1. Get Battery On Navigator
	navigator.getBattery().then((batt) => {
		// 2. Update Each percentage real time
		updateBattery = () => {
			let level = Math.floor(batt.level * 100); // level = current Battery devices
			Bpercentage.innerHTML = level + "%"; // Bpercentage battery to class .Bstatus
			batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`; // class .bstatus styling height accordition of percentage now

			// =========== 3. Add Conditional Charging or not Charging Batteries ===============
			if (level == 100) {
				batteryStatus.innerHTML = `<i 
                class="ri-battery-2-fill green-color"></i>`;
				batteryLiquid.style.height = "103%";
			} else if ((level <= 20) & !batt.charging) {
				batteryStatus.innerHTML = `<i 
                class="ri-plug-line animated-red animated-red"></i>`;
			} else if (batt.charging) {
				batteryStatus.innerHTML = `<i 
                class="ri-flashlight-line animated-green"></i>`;
			} else {
				batteryStatus.innerHTML = "";
			}
			// =========== 3. Add Conditional Charging or not Charging Batteries ===============

			// =========== 4. Styling Conditional Percentage Batteries ===============
			if (level <= 20) {
				batteryLiquid.classList.add("gradient-color-red");
				batteryLiquid.classList.remove(
					"gradient-color-green",
					"gradient-color-orange",
					"gradient-color-yellow"
				);
			} else if (level <= 48) {
				batteryLiquid.classList.add("gradient-color-orange");
				batteryLiquid.classList.remove(
					"gradient-color-green",
					"gradient-color-red",
					"gradient-color-yellow"
				);
			} else if (level <= 80) {
				batteryLiquid.classList.add("gradient-color-green");
				batteryLiquid.classList.remove(
					"gradient-color-red",
					"gradient-color-orange",
					"gradient-color-yellow"
				);
			}
			// =========== 4. Styling Conditional Percentage Batteries ===============
		};
		// 2. Update Each percentage real time
		// ========= Go to functional over each percentage changing ======
		updateBattery();
		batt.addEventListener("chargingchange", () => {
			updateBattery();
		});
		batt.addEventListener("levelchange", () => {
			updateBattery();
		});
		// ========= Go to functional over each percentage changing ======
	});
	// 1. Get Battery On Navigator
}
// ================= Battery Configuration ===================

function useSlideCloseFadeBig(id, handler, duration = 400) {
        let wrapp = document.getElementById(id);
        wrapp.classList.remove("animate__fadeInUpBig");
        wrapp.classList.add("animate__fadeOutDownBig");
        setTimeout(handler(), duration);
}

export {
    useSlideCloseFadeBig
}
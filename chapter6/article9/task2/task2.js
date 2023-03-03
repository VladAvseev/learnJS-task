function delay(f, ms) {

    return function(...args) {
        const savedThis = this;
        setTimeout(function() {
            f.apply(savedThis, args);
        }, ms);
    };

}
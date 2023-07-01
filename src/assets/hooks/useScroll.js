import { useEffect, useRef } from "react";

export default function useScroll(parentRef, childRef, callback) {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0,
        };

        const handleIntersection = ([target]) => {
            if (target.isIntersecting) {
                console.log("intersected");
                callback();
            }
        };

        observer.current = new IntersectionObserver(handleIntersection, options);

        if (childRef.current) {
            observer.current.observe(childRef.current);
        }

        return function () {
            if (observer.current && childRef.current) {
                observer.current.unobserve(childRef.current);
            }
        };
    }, [parentRef, childRef, callback]);
}

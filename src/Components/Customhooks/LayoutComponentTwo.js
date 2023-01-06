import useWindwoResize from "./useWindwoResize";

const LayoutComponentTwo = () => {
   const onsmallscreen = useWindwoResize();
    return (
        <div className={(onsmallscreen)? 'small': 'Large'}>
             <h1>Class changing dynamically</h1>
        </div>
    );
};

export default LayoutComponentTwo;
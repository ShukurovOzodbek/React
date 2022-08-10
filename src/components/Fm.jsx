import '../App.css'

const Fm = () => {
    return (
        <>
            <form action="#">
                <label htmlFor="inp">Telefon <code>*</code></label>
                <span className="code">+998</span>
                <input type="tel" id='inp' />
                <label htmlFor="inp2" id="one">Parol <code>*</code></label>
                <input type="text" id='inp2' />
                <button>LOGIN</button>
            </form>
        </>
    )
}

export default Fm;
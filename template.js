class Header extends HTMLElement {
    connectedCallBack(){
        this.innerHTML`
        <section class="container">
        <nav class="navbar">
            <div class="log-con">
                <div class="logo">
                    <a href="#"> Dokan Travels</a>
                </div>
                <div class="hamburger" id="toggle">
                    =
                </div>
            </div>
            <div class="nav-items">
                <div class="nav-item">
                    <a href="#">Home</a>
                </div>
                <div class="nav-item">
                    <a href="#">AboutUs</a>
                </div>
                <div class="nav-item">
                    <a href="#list">Listings</a>
                </div>
                <div class="nav-item">
                    <a href="#">FAQ</a>
                </div>
                <div class="nav-item">
                    <a href="#">ContactUs</a>
                </div>

                <div class="search">
                    <form action="">
                        <input type="text" placeholder="Search...">
                        <button type="submit" class="search-icon">0</button>
                    </form>
                </div>
                <div class="profile">
                    <a href="./login.html">
                        <div class="user-con">
                            Login
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    </section>
        
        
        
        
        `
    }
}

customElements.define('my-header', Header)
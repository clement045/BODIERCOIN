<template>
    
    <div>

            <div id='app' v-if="authentificated">
                  <b-alert show> Hello {{ user.name }}! </b-alert>
            </div>

        <div>
            <b-navbar toggleable="lg" type="light" variant="light">
                <b-navbar-brand id="logo">
                        <router-link :to="{name: 'Home'}"><Logo/></router-link><br />
                        <vue-typer :text='["More coins","More data", "More lightweight", "More useful", "More API"]' :pre-erase-delay='5000' erase-style="clear"></vue-typer>
                </b-navbar-brand>
                <let-it-snow
                v-bind="snowConf"
                :show="show"    
                ></let-it-snow>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#"><router-link :to="{name: 'About'}">A propos</router-link></b-nav-item>
                    <b-nav-item href="#"><router-link :to="{name: 'Retailers'}">Où dépenser</router-link></b-nav-item>
                    <b-nav-item><router-link :to="{name: 'Register'}">S'enregistrer</router-link></b-nav-item>
                    <b-nav-item v-if="authenticated" ><router-link :to="{name: 'Wallet'}">Portefeuille</router-link></b-nav-item>
                    <b-nav-item v-else disabled>Acheter de la monnaie</b-nav-item>
                    <b-nav-item><button id="christmas" @click.prevent="playSound('https://dgudge.com/sound.mp3')"><b-icon icon="tree-fill"></b-icon></button></b-nav-item>
                    <b-nav-item v-if="authenticated" >Hello, {{user.name}}</b-nav-item>
                                  
                    
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">


                    <b-nav-item-dropdown class="navdd" right>
                    <!-- Using 'button-content' slot -->
                                <template v-if="authenticated">  
                                    <b-dropdown-item >
                                        <router-link :to="{name: 'Dashboard'}">Dashboard</router-link>
                                    </b-dropdown-item>
                                    <b-dropdown-item>
                                        <router-link :to="{name: 'Wallet'}">Portefeuille</router-link>
                                    </b-dropdown-item>
                                    <b-dropdown-item>
                                        <a href="#" @click.prevent="signout">Signout</a>
                                    </b-dropdown-item>
                                    
                                </template>
                                <template v-if="!authenticated">
                                    <b-dropdown-item>
                                        <router-link :to="{name: 'Signin'}">Signin</router-link>
                                    </b-dropdown-item>
                                    <b-dropdown-item>
                                        <router-link :to="{name: 'Register'}">Register</router-link>
                                    </b-dropdown-item>
                                </template>

                    <template #button-content>
                        Mon compte
                    </template>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            </div>

        
       <!-- {{ user }}
        {{ authenticated }}-->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Logo from '@/assets/logo.svg'


export default {
    name: 'Navigation',
    components: {
        Logo,
    },
    data() {
        return {
            name: "Sitepoint",
            snowConf: {
            windPower : 1,  
            speed : 3,
            count : 12,
            size : 10,
            opacity : 1,
            images: ['https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/snow.png',
                    'https://dgudge.com/eggsnow.png',
                    'https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/tree.png']
            },
            show: false    
        }
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    },
    methods: {
        playSound (sound) {
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
                this.show = true
                alert("We wish you a very BC christmas !");
            }
        },
        ...mapActions({
            signoutAction: 'auth/signout' //signoutAction = action du STORE
        }),
        signout() { //méthode appelée par la fonction 
            this.signoutAction().then(() => {
                this.$router.replace({
                    name: 'Home'
                })
            })
        }
    },
    mounted(){
          
    }


}
</script>

<style scoped>

    .vue-typer{
        font-size: 15px;
    }

    #nav-collapse.show {
        z-index: 1000;
        background-color:#FFA008;
        color: white;
    }
    #logo {
        width: 200px;
    }

    a {
        color: #000000;
    }

    a:hover {
        color: #FFA008;
        text-decoration: underline;
    }
    .nav-link {
        padding-top: 1em;
        color: black;
    }
    #__BVID__111__BV_toggle_ {
        color: black;
    }
    #__BVID__111__BV_toggle_:hover {
        color: #FFA008;
    }
    #__BVID__19__BV_toggle_ {
        color: black;
    }
    .nav-item {
        padding-left: 10px;
    }
    #logo{
        width: 200px
    }
    .navdd{
        background-color: #FFA008;
    }
    .dropdown-menu.dropdown-menu-right.show {
    border: none;
    border-radius: 0px;
    background: #FFA008;
    color: black;
    margin-left: 0px;
    outline: none;
    padding-left: 0px;
    }
    #__BVID__19__BV_toggle_ {
    color: black;
    }
    #christmas{
        color: #FFA008;
        border: none;
        background-color:transparent;
    }
    #christmas:hover{
        color: green;
    }
</style>
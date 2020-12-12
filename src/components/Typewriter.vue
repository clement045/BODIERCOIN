<template>
    <div id="typercontainer">
        <div id="egg">
            <span class="hvr-wobble-to-top-right">
                <Egg/>
            </span>
        </div><br/>
        <vue-typer :text='["Kot Kot Kot...","Hello you.","BC is a eggy local money API.", "Built in laravel.", "Not dockerised :(","BC Much tokenised.","With Stripe paiement.","...101101111011111...", "Hear this ?","This is your data.", "Travelling the secured way."]' erase-style="select-all"></vue-typer>
    </div>
</template>
<script>
import Egg from '@/assets/egg.svg'
    export default {
        name: "Typewriter",
        components:{
            Egg
        },
        data(){
            return{
                
            }
        }
    }
    
</script>
<style>
.vue-typer {
    font-size: 70px;
    font-family: 'avenir';
    font-weight: bolder;
}

#typercontainer {
    text-align: center;
    padding-bottom: 5em;
    padding-top: 3em;
}
#egg{
    width: 20%;
    margin-left: 40%;
    margin-bottom: 3em;
}
.vue-typer .custom.char.selected {
  background-color: #FFA008;
  color: white;
}

@media screen and (max-width: 1200px) {
    #egg{
        width: 40%;
        margin-left: 30%;
    }
}

@media screen and (max-width: 1200px) {
    .vue-typer {
        font-size: 27px;
    }
}


/* Wobble To Top Right */
@-webkit-keyframes hvr-wobble-to-top-right {
  16.65% {
    -webkit-transform: translate(8px, -8px);
    transform: translate(8px, -8px);
  }
  33.3% {
    -webkit-transform: translate(-6px, 6px);
    transform: translate(-6px, 6px);
  }
  49.95% {
    -webkit-transform: translate(4px, -4px);
    transform: translate(4px, -4px);
  }
  66.6% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  83.25% {
    -webkit-transform: translate(1px, -1px);
    transform: translate(1px, -1px);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@keyframes hvr-wobble-to-top-right {
  16.65% {
    -webkit-transform: translate(8px, -8px);
    transform: translate(8px, -8px);
  }
  33.3% {
    -webkit-transform: translate(-6px, 6px);
    transform: translate(-6px, 6px);
  }
  49.95% {
    -webkit-transform: translate(4px, -4px);
    transform: translate(4px, -4px);
  }
  66.6% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  83.25% {
    -webkit-transform: translate(1px, -1px);
    transform: translate(1px, -1px);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
.hvr-wobble-to-top-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-wobble-to-top-right:hover, .hvr-wobble-to-top-right:focus, .hvr-wobble-to-top-right:active {
  -webkit-animation-name: hvr-wobble-to-top-right;
  animation-name: hvr-wobble-to-top-right;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

</style>
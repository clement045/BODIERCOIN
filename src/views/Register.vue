<template>
    <div class="text.center col">
        <div class="d-flex justify-content-center" id="register-form">
            <form  @submit.prevent="register">
                <br><br>
                <div class="col text-center" id="error-message">
                    <p>Votre compte n'a pas pu être créé.</p>
                </div>
                <br><br>
                <div>
                    <label for="name">
                        Nom : 
                    </label> <br>
                    <input type="text" name="firstName" placeholder="Prénom" id="name" v-model="firstName">
                    <input type="text" name="lastName" placeholder="Nom" id="name" v-model="lastName">
                </div>
                <br>
                <div>
                    <label for="adress">
                        Adresse : 
                    </label>
                    <input type="text" name="adress" placeholder="Adresse" id="adress" v-model="adress"><br>
                    <input type="text" name="postCode" placeholder="Code postal" id="postCode" v-model="postCode">
                    <input type="text" name="city" placeholder="Ville" id="city" v-model="city">
                </div>
                <br>
                <div>
                    <label for="email">
                        Email : 
                    </label>
                    <input type="text" name="email" placeholder="email" id="email" v-model="email">
                </div>
                <br>
                <div>
                    <label for="password">
                        Mot de passe : 
                    </label>
                    <input type="password" 
                        @focus="passwordMsg = true" 
                        @blur="passwordMsg = false"
                        @keyup="checkPassword"
                        name="password" placeholder="Mot de passe" id="password" v-model="password">
                </div>
                <div>
                    <label for="password">
                        Confirmation mot de passe : 
                    </label>
                    <input type="password" 
                    @focus="confirmationMsg = true" 
                    @blur="confirmationMsg = false" 
                    @keyup="checkConfirmation"
                     name="passwordConfirmation" placeholder="Mot de passe" id="passwordConfirmation" v-model="passwordConfirmation">
                </div>
                <br>
                <div class="text-center">
                    <button class="btn btn-dark" type="register">Register</button>
                </div>
            </form>
            
        </div>
        <div class="messages d-flex justify-content-center" >
            <div v-if="passwordMsg" class="col-md-4 text-center" id="message">
                <h4> Votre mot de passe doit contenir :</h4>
                <p id="letter" class="invalid">Une lettre <b>minuscule</b></p>
                <p id="capital" class="invalid">Une lettre  <b>majuscule</b></p>
                <p id="digit" class="invalid">Un <b>nombre</b></p>
                <p id="length" class="invalid">Minimum <b>6 caractères</b></p>
            </div>
            <div v-if="confirmationMsg" class="col-md-4 text-center" id="message">
                <p id="pwConfirmation" class="invalid">La confirmation doit correspondre au mot de passe.</p>
            </div>
            
            <div id="success-message">
                <p>Votre compte a été créé avec succès.</p>
            </div>
        </div>
            <br/>    <br/>
    </div>

</template>

<script>
//import {mapActions} from 'vuex';
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
        name: '',
        firstName: '',
        lastName: '',
        adress: '',
        postCode: '',
        city: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        lat: '',
        long: '',
        passwordMsg: false,
        confirmationMsg: false
    }
  }, 
  methods: {
      async register() {
        if (
        this.emailValidation(this.email) && 
        this.passwordValidation(this.password) && 
        this.passwordConfirm(this.password, this.passwordConfirmation)
        ) {
            try {
                let latLong = await this.getLatLong(); //on récupère la lat et long dans cette variable

                let res = await axios.post('https://haute-loire.org/api/user', {
                    name: this.firstName + " "+ this.lastName,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    payroll: 0,
                    retailer: 0,
                    latitude: latLong[0], //latitude est le premier élément de la variable latLong
                    longitude: latLong[1],  //longitude est le second élément de la variable latLong
                    address: this.adress,
                    postalCode: this.postCode,
                    city: this.city
                })

            console.log(res.data);
            console.log("compte créé avec succès");
            this.hideError();
            this.displaySuccess();
            alert("Votre compte a été créé avec succès.\r\n Vous pouvez vous authentifier.")
            this.$router.replace({
                name: 'Signin'
            });
            }
            catch (e) {
                console.log(e);
                this.displayError();
                alert("Une erreur est survenue. Merci de réessayer");
            }
        } else {
            console.log("pas ok")
            this.displayError();
            alert("Une erreur est survenue.\r\n Merci de remplir correctement les informations demandées.")
        }

      },
      emailValidation(mail) {
        //eslint-disable-next-line
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(mail);
      },
      passwordValidation(password) {
          //eslint-disable-next-line
          let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
          return reg.test(password);
      },
      passwordConfirm(password, passwordConfirmation) {
          return password == passwordConfirmation;

      },
      displayError() {
          var t = document.querySelector("#error-message");
          t.style.display = 'block';
      },
      hideError() {
          var t = document.querySelector("#error-message");
          t.style.display = 'none';
      },
      displaySuccess() {
          var ta = document.querySelector("#success-message");
          ta.style.display = 'block';
      },
      async getLatLong() { 
            let url = "https://nominatim.openstreetmap.org/search.php";
            let params = {
                q: this.adress+" "+this.city+" "+this.postCode,
                format: 'json',
                addressdetails: 1
            };
            const res = await axios.get(url, {params: params}); //on stock la réponse dans cette variable
            console.log(res.data[0].lat);
            console.log(res.data[0].lon);
            return [res.data[0].lat, res.data[0].lon]; //on retourne un tableau avec les 2 éléments

        },
        checkPassword() {
            var myInput = document.getElementById("password");
            var letter = document.getElementById("letter");
            var capital = document.getElementById("capital");
            var number = document.getElementById("digit");
            var length = document.getElementById("length");

            console.log(this.password);
            // Validate lowercase letters
            var lowerCaseLetters = /[a-z]/g;
            if(myInput.value.match(lowerCaseLetters)) {  
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }
            
            // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if(myInput.value.match(upperCaseLetters)) {  
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            } else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }

            // Validate numbers
            var numbers = /[0-9]/g;
            if(myInput.value.match(numbers)) {  
                number.classList.remove("invalid");
                number.classList.add("valid");
            } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }
            
            // Validate length
            if(myInput.value.length >= 6) {
                length.classList.remove("invalid");
                length.classList.add("valid");
            } else {
                length.classList.remove("valid");
                length.classList.add("invalid");
            }
                    
        },
        checkConfirmation() {
            var conf = document.getElementById("pwConfirmation");
            if (this.password == this.passwordConfirmation) {
                conf.classList.remove("invalid");
                conf.classList.add("valid");
            } else {
                conf.classList.remove("valid");
                conf.classList.add("invalid");
            }
        }
                
    }

}
</script>

<style scoped>
#register-form {
    width: 100%;
}
input {
    width: 100%;
}
input#name {
    width: 50%!important;
}
#error-message {
    background-color: #ffe0e0;
    color: #ba3939;
    display: none;
}

#success-message {
    display: none;
}

#message {
    background-color: #f3f3f3;
    justify-content: center;
    text-align: center;
}
.valid {
  color: green;
}

.valid:before {
  position: relative;
  left: -35px;
  content: "✔";
}

/* Add a red text color and an "x" when the requirements are wrong */
.invalid {
  color: red;
}

.invalid:before {
  position: relative;
  left: -35px;
  content: "✖";
}

/*appstyle*/
.btn-dark {
    color: #fff;
    background-color: #ffa008;
    border-color: #ffa008;
    border-radius: 0px;
}
.btn-dark:hover {
    color: #fff;
    background-color: black;
    border-color: white;
}
label {
    font-weight: bold;
    font-size: 20px;
    font-family: 'avenir';
}
</style>
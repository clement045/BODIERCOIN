<template>
    <div>
        <form class="form-horizontal" ref="adr">
            <fieldset>
                <!-- Address form -->

                
         
                <h2>Address</h2>
         
                <!-- full-name input-->
                <div class="control-group">
                    <label class="control-label">Full Name</label>
                    <div class="controls">
                        <input id="full-name" name="full-name" type="text" placeholder="full name"
                        class="input-xlarge">
                        <p class="help-block"></p>
                    </div>
                </div>
                <!-- address-line1 input-->
                <div class="control-group">
                    <label class="control-label">Addresse</label>
                    <div class="controls">
                        <input id="address-line1" name="address-line1" type="text" placeholder="address line 1"
                        class="input-xlarge" v-model="adress">
                    </div>
                </div>

                <!-- city input-->
                <div class="control-group">
                    <label class="control-label">Ville</label>
                    <div class="controls">
                        <input id="city" name="city" type="text" placeholder="city" class="input-xlarge" v-model="city">
                        <p class="help-block"></p>
                    </div>
                </div>

                <!-- postal-code input-->
                <div class="control-group">
                    <label class="control-label">Code postal</label>
                    <div class="controls">
                        <input id="postal-code" name="postal-code" type="text" placeholder="zip or postal code"
                        class="input-xlarge" v-model="postcode">
                        <p class="help-block"></p>
                    </div>
                </div>
                <!-- country select -->
                <div class="control-group">
                    <label class="control-label">Pays</label>
                    <div class="controls">
                        <select id="country" name="country" class="input-xlarge">
                            <option value="FR" selected="selected">France</option>
                            <option value="AL">France</option>
                        </select>
                    </div>
                </div>
            </fieldset>

        </form>
            <button class="btn btn-dark btn-lg" @click="geocodeMe">Submit adress</button>
    </div>

</template>


<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {

        }
    },
    methods: {
        async geocodeMe() {
            let url = "https://nominatim.openstreetmap.org/search.php";
            let params = {
                q: this.adress+" "+this.city+" "+this.postcode,
                format: 'json',
                addressdetails: 1
            };
            const res = await axios.get(url, {params: params});
            console.log(res.data[0].lat);
            console.log(res.data[0].lon);

        }
    },
    mounted() {
      
    }
}
</script>
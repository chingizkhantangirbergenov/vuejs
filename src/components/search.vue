<template>
	<!DOCTYPE html>
	<html>
	<body>
		<v-container id="main">
			<v-layout >
				</select>
				<div id="show-companies">
					<h1 class="h1x1">All companies</h1>	
					<label>Regions:</label>
					<select v-model='regionSearch' >
						<option v-for="region in regions" :value="region.region">{{region.region}}</option>
					</select>
                  <label>Районы:</label>
					<select :disabled="regionSearch.length == 0" v-model='addressSearch'>
						<option v-for="address in addresses">{{address.region}}</option>
					</select>		
					<div v-for="company in companies" class="single-company"> 
						<h2>Название:{{company.name}}</h2>
						<h3>Регион:  {{company.region}}</h3>
						<h4>БИН:  {{company.bin}}</h4>
						<h4>Отрасль:  {{company.otrasl}}</h4>
						<a>Aдрес:  {{company.address}}</a>
						<h4>Почта:  {{company.mail}}</h4>
						<a>Телефон:  {{company.phone}}</a>
					</div>
				</div>

			</v-layout>
		</v-container>
	</body>
	</html>
</template>
<script>
	export default {
		data() {
			return {
				companies:[],
				regions:[],
				addresses:[],
				regionSearch:'',
				addressSearch:''

			}


		},
		created() {
			this.fetchCompany();
			this.fetchRegion();
			this.fetchAddress();
			
		},
		methods: {
			fetchCompany() {
				let api = "http://10.110.118.87:8085/companies"
				this.$http.get(api).then(function(data){
					console.log(data)
					this.companies = data.body
				})
			},
			fetchRegion() {
				let api = "http://10.110.118.87:8085/company/regions"
				this.$http.get(api).then(function(data){
					console.log(data)
					this.regions = data.body
				})
			},
			fetchAddress() {
				let api = "http://10.110.118.87:8085/address/filter/" 
			    let api2 = "01"
			    
				if(this.region.region)
					api2 = this.region.region
				else
			        api2 = this.region.region 
				let api3 = api+api2
				 
				this.$http.get(api3).then(function(data){
					console.log(data)
					this.addresses  = data.body
			})
		}
	}
	}		


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Play');
#show-companies {
	max-width: 800px;
	margin:0 auto;
}
.single-company {
	padding: 20px;
	margin:20px 0;
	box-sizing: border-box;
	background: #80D8FF;
	font-family: 'Play', sans-serif;
	box-shadow: 0 0 10px rgba(0,0,0,.68);
}
.h1x1 {
	text-align: center;
	font-family: 'Play', sans-serif;
	padding-top: 40px;
	padding-bottom: 40px;
}
body {
	background: url(https://look.com.ua/pic/201209/1280x720/look.com.ua-27529.jpg);     
	background-size: contain;
}
</style>
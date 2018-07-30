<template>
	<!DOCTYPE html>
<html>
	<body>
	<v-container id="main">
	    <v-layout >
	<div id="show-companies">
		<h1 class="h1x1">All companies</h1>
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
				regions:[]
			
			}


		},
		created() {
			this.fetchCompany();
			this.fetchRegion();
			
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
	margin-top:35px;
}
body {
      background: url(https://look.com.ua/pic/201209/1280x720/look.com.ua-27529.jpg);     
      background-size: contain;
    }
</style>
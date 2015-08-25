module.exports = {
	development : {
		app : {
			name : 'Passport SAML strategy example',
			port : process.env.PORT || 3000
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				entryPoint : 'https://app.onelogin.com/trust/saml2/http-post/sso/470011',
				issuer : 'passport-saml'
			}
		}
	}
}

module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME','classhour'),
      api_key: env('CLOUDINARY_KEY','631542121921358'),
      api_secret: env('CLOUDINARY_SECRET','O7DegOdVnEZyhKQ2V0knub26QDA'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
     email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY','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'),
    },
    settings: {
      defaultFrom: 'classhour247@gmail.com',
      defaultReplyTo: 'classhour247@gmail.com',
      testAddress: 'dayoo.oladele@gmail.com',
    },
  },
  // ...
});
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    data: {
      id: 1,
      name: 'John Doe',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      created_at: new Date(Date.now()),
      updated_at: '',
    },
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

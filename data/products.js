// 'name',
//     'default_code',
//     'brand_id',
//     'image_url_md',
//     'public_categ_ids',
//     'webclient_list_price_with_currency',
//     'webclient_sale_price_with_currency',
//     'has_discount',
//     'discount_description',
//     'discount_description_detail',
//     'sale_delay',
//     'seller_lead_time',
//     'invoice_policy',
//     'virtual_available',
//     'qty_available',
//     'allow_out_of_stock_order',
//     'website_description',

const prodBase = [
  {
    id: 1,
    name: "Gold Ring",
    image_url_md: "https://placeimg.com/800/800/arch",
    image_gallery: [
      "https://placeimg.com/800/800/arch",
      "https://placeimg.com/800/800/arch",
      "https://placeimg.com/800/800/arch",
      "https://placeimg.com/800/800/arch",
      "https://placeimg.com/800/800/arch"
    ],
    description: "မခွဲမခွါပဲအမြဲသာဆင်မြန်းထားသင့်တဲ့ဒီဇိုင်းလေး",
    webclient_list_price_with_currency: "50000000",
    webclient_sale_price_with_currency: "45000000",
    //webclient_sale_price: 5000000
    //currency: "MMK"
    has_discount: true,
    discount_description: "10%",
    sale_delay: 3,
    seller_lead_time: 2,
    virtual_available: 5,
    terms_conditions: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget leo mattis lacus sollicitudin pretium. Quisque sed sollicitudin augue. Aliquam non tellus sit amet augue blandit egestas non non risus. Praesent facilisis libero nunc, eget lobortis tellus euismod et. Sed vitae nisl bibendum, finibus ligula placerat, ullamcorper leo. Aliquam erat volutpat. Curabitur sit amet augue erat. Quisque eros sapien, mattis quis rhoncus eget, gravida ac augue. Pellentesque ultrices orci in volutpat porta. Aenean commodo, urna in interdum tempus, arcu mauris rutrum metus, non iaculis tortor tellus et lectus. Proin vel vestibulum urna, ut tincidunt nunc.
      Pellentesque sed lectus vel sem viverra placerat. Duis non sem velit. Mauris consequat malesuada neque, vestibulum viverra nulla varius eget. Vestibulum pharetra consectetur semper. Morbi sed magna accumsan, finibus massa sed, volutpat enim. Aliquam aliquam urna vitae leo venenatis blandit. Mauris vehicula purus id sem fringilla ullamcorper.
      Nullam sed lacinia urna. Nunc feugiat ultrices posuere. Sed a facilisis est. Cras mollis faucibus nunc sit amet vehicula. Aenean posuere, tellus et dignissim consectetur, massa erat volutpat lacus, in fringilla enim leo ut arcu. Proin at nisl at arcu bibendum vestibulum. Fusce volutpat, massa eu tempus ultricies, mi ante accumsan velit, nec bibendum magna est eget felis. Vestibulum molestie vehicula magna et aliquam.
      Proin faucibus fermentum orci quis ornare. Phasellus lorem orci, volutpat at magna in, laoreet fermentum orci. Mauris mattis ornare consequat. Pellentesque ligula neque, sollicitudin ut dolor id, volutpat facilisis quam. Quisque commodo turpis et lorem fringilla lobortis. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam congue eget quam eget dapibus. Cras eleifend est magna, vitae ultricies nulla viverra scelerisque. Praesent dictum et nunc at posuere. Vestibulum vel nunc consequat ex dictum mattis. Ut venenatis purus vitae feugiat vestibulum. Curabitur id sapien sed tortor dignissim iaculis a vel justo. Suspendisse commodo enim vel tempor sollicitudin. Phasellus massa est, aliquet a euismod ut, lobortis et nunc. Nullam congue massa et nulla efficitur dignissim. Curabitur pretium non enim at venenatis. Sed imperdiet consectetur lacinia. Nam laoreet sem eget vestibulum finibus. Maecenas arcu lorem, mollis in risus vel, gravida commodo leo.
    `,
    delivery_terms: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget leo mattis lacus sollicitudin pretium. Quisque sed sollicitudin augue. Aliquam non tellus sit amet augue blandit egestas non non risus. Praesent facilisis libero nunc, eget lobortis tellus euismod et. Sed vitae nisl bibendum, finibus ligula placerat, ullamcorper leo. Aliquam erat volutpat. Curabitur sit amet augue erat. Quisque eros sapien, mattis quis rhoncus eget, gravida ac augue. Pellentesque ultrices orci in volutpat porta. Aenean commodo, urna in interdum tempus, arcu mauris rutrum metus, non iaculis tortor tellus et lectus. Proin vel vestibulum urna, ut tincidunt nunc.
      Pellentesque sed lectus vel sem viverra placerat. Duis non sem velit. Mauris consequat malesuada neque, vestibulum viverra nulla varius eget. Vestibulum pharetra consectetur semper. Morbi sed magna accumsan, finibus massa sed, volutpat enim. Aliquam aliquam urna vitae leo venenatis blandit. Mauris vehicula purus id sem fringilla ullamcorper.
      Nullam sed lacinia urna. Nunc feugiat ultrices posuere. Sed a facilisis est. Cras mollis faucibus nunc sit amet vehicula. Aenean posuere, tellus et dignissim consectetur, massa erat volutpat lacus, in fringilla enim leo ut arcu. Proin at nisl at arcu bibendum vestibulum. Fusce volutpat, massa eu tempus ultricies, mi ante accumsan velit, nec bibendum magna est eget felis. Vestibulum molestie vehicula magna et aliquam.
      Proin faucibus fermentum orci quis ornare. Phasellus lorem orci, volutpat at magna in, laoreet fermentum orci. Mauris mattis ornare consequat. Pellentesque ligula neque, sollicitudin ut dolor id, volutpat facilisis quam. Quisque commodo turpis et lorem fringilla lobortis. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam congue eget quam eget dapibus. Cras eleifend est magna, vitae ultricies nulla viverra scelerisque. Praesent dictum et nunc at posuere. Vestibulum vel nunc consequat ex dictum mattis. Ut venenatis purus vitae feugiat vestibulum. Curabitur id sapien sed tortor dignissim iaculis a vel justo. Suspendisse commodo enim vel tempor sollicitudin. Phasellus massa est, aliquet a euismod ut, lobortis et nunc. Nullam congue massa et nulla efficitur dignissim. Curabitur pretium non enim at venenatis. Sed imperdiet consectetur lacinia. Nam laoreet sem eget vestibulum finibus. Maecenas arcu lorem, mollis in risus vel, gravida commodo leo.
    `,
    type: 'White Gold ( ရွှေဖြူ )',
    weight: [
      '24K ၁၆ပဲရည်',
      '၁ ကျပ် ၄ပဲ ၅ ရွှေး'
    ],
    size: [
      '14.05mm'
    ],
    category: 'Necklace',
    colour: 'Yellow',
    gender: 'Girl',
    eta: '3-5 days',
    shop_id: {
      id: 1,
      name: "Shwe Nann Taw",
      shop_logo: "/assets/logos/01.png",
      customer_review: "341",
      delivery_on_time: "100%"
    },
  },
  {
    id: 2,
    name: "Gold Neckalce",
    image_url_md: "https://placeimg.com/800/800/tech",
    image_gallery: [
      "https://placeimg.com/800/800/tech",
      "https://placeimg.com/800/800/tech",
      "https://placeimg.com/800/800/tech",
      "https://placeimg.com/800/800/tech",
      "https://placeimg.com/800/800/tech"
    ],
    description: "မခွဲမခွါပဲအမြဲသာဆင်မြန်းထားသင့်တဲ့ဒီဇိုင်းလေး",
    webclient_list_price_with_currency: "50000000",
    webclient_sale_price_with_currency: "45000000",
    has_discount: false,
    discount_description: "",
    virtual_available: 5,
    terms_conditions: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget leo mattis lacus sollicitudin pretium. Quisque sed sollicitudin augue. Aliquam non tellus sit amet augue blandit egestas non non risus. Praesent facilisis libero nunc, eget lobortis tellus euismod et. Sed vitae nisl bibendum, finibus ligula placerat, ullamcorper leo. Aliquam erat volutpat. Curabitur sit amet augue erat. Quisque eros sapien, mattis quis rhoncus eget, gravida ac augue. Pellentesque ultrices orci in volutpat porta. Aenean commodo, urna in interdum tempus, arcu mauris rutrum metus, non iaculis tortor tellus et lectus. Proin vel vestibulum urna, ut tincidunt nunc.
      Pellentesque sed lectus vel sem viverra placerat. Duis non sem velit. Mauris consequat malesuada neque, vestibulum viverra nulla varius eget. Vestibulum pharetra consectetur semper. Morbi sed magna accumsan, finibus massa sed, volutpat enim. Aliquam aliquam urna vitae leo venenatis blandit. Mauris vehicula purus id sem fringilla ullamcorper.
      Nullam sed lacinia urna. Nunc feugiat ultrices posuere. Sed a facilisis est. Cras mollis faucibus nunc sit amet vehicula. Aenean posuere, tellus et dignissim consectetur, massa erat volutpat lacus, in fringilla enim leo ut arcu. Proin at nisl at arcu bibendum vestibulum. Fusce volutpat, massa eu tempus ultricies, mi ante accumsan velit, nec bibendum magna est eget felis. Vestibulum molestie vehicula magna et aliquam.
      Proin faucibus fermentum orci quis ornare. Phasellus lorem orci, volutpat at magna in, laoreet fermentum orci. Mauris mattis ornare consequat. Pellentesque ligula neque, sollicitudin ut dolor id, volutpat facilisis quam. Quisque commodo turpis et lorem fringilla lobortis. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam congue eget quam eget dapibus. Cras eleifend est magna, vitae ultricies nulla viverra scelerisque. Praesent dictum et nunc at posuere. Vestibulum vel nunc consequat ex dictum mattis. Ut venenatis purus vitae feugiat vestibulum. Curabitur id sapien sed tortor dignissim iaculis a vel justo. Suspendisse commodo enim vel tempor sollicitudin. Phasellus massa est, aliquet a euismod ut, lobortis et nunc. Nullam congue massa et nulla efficitur dignissim. Curabitur pretium non enim at venenatis. Sed imperdiet consectetur lacinia. Nam laoreet sem eget vestibulum finibus. Maecenas arcu lorem, mollis in risus vel, gravida commodo leo.
    `,
    delivery_terms: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget leo mattis lacus sollicitudin pretium. Quisque sed sollicitudin augue. Aliquam non tellus sit amet augue blandit egestas non non risus. Praesent facilisis libero nunc, eget lobortis tellus euismod et. Sed vitae nisl bibendum, finibus ligula placerat, ullamcorper leo. Aliquam erat volutpat. Curabitur sit amet augue erat. Quisque eros sapien, mattis quis rhoncus eget, gravida ac augue. Pellentesque ultrices orci in volutpat porta. Aenean commodo, urna in interdum tempus, arcu mauris rutrum metus, non iaculis tortor tellus et lectus. Proin vel vestibulum urna, ut tincidunt nunc.
      Pellentesque sed lectus vel sem viverra placerat. Duis non sem velit. Mauris consequat malesuada neque, vestibulum viverra nulla varius eget. Vestibulum pharetra consectetur semper. Morbi sed magna accumsan, finibus massa sed, volutpat enim. Aliquam aliquam urna vitae leo venenatis blandit. Mauris vehicula purus id sem fringilla ullamcorper.
      Nullam sed lacinia urna. Nunc feugiat ultrices posuere. Sed a facilisis est. Cras mollis faucibus nunc sit amet vehicula. Aenean posuere, tellus et dignissim consectetur, massa erat volutpat lacus, in fringilla enim leo ut arcu. Proin at nisl at arcu bibendum vestibulum. Fusce volutpat, massa eu tempus ultricies, mi ante accumsan velit, nec bibendum magna est eget felis. Vestibulum molestie vehicula magna et aliquam.
      Proin faucibus fermentum orci quis ornare. Phasellus lorem orci, volutpat at magna in, laoreet fermentum orci. Mauris mattis ornare consequat. Pellentesque ligula neque, sollicitudin ut dolor id, volutpat facilisis quam. Quisque commodo turpis et lorem fringilla lobortis. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam congue eget quam eget dapibus. Cras eleifend est magna, vitae ultricies nulla viverra scelerisque. Praesent dictum et nunc at posuere. Vestibulum vel nunc consequat ex dictum mattis. Ut venenatis purus vitae feugiat vestibulum. Curabitur id sapien sed tortor dignissim iaculis a vel justo. Suspendisse commodo enim vel tempor sollicitudin. Phasellus massa est, aliquet a euismod ut, lobortis et nunc. Nullam congue massa et nulla efficitur dignissim. Curabitur pretium non enim at venenatis. Sed imperdiet consectetur lacinia. Nam laoreet sem eget vestibulum finibus. Maecenas arcu lorem, mollis in risus vel, gravida commodo leo.
    `,
    type: 'White Gold ( ရွှေဖြူ )',
    weight: [
      '24K ၁၆ပဲရည်',
      '၁ ကျပ် ၄ပဲ ၅ ရွှေး'
    ],
    size: [
      '14.05mm'
    ],
    category: 'Necklace',
    colour: 'Yellow',
    gender: 'Girl',
    eta: '3-5 days',
    shop_id: {
      id: 1,
      name: "Shwe Sin",
      shop_logo: "/assets/logos/02.png",
      customer_review: "341",
      delivery_on_time: "100%",
      subscription: "premium",
    },
  },
]

export const products = [
  ...prodBase,
  ...prodBase,
  ...prodBase,
  ...prodBase,
  ...prodBase,
  ...prodBase,
  ...prodBase,
  ...prodBase,
]

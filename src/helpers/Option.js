export const genderOptions = [
  {
    label: "ប្រុស",
    value: "male",
  },
  {
    label: "ស្រី",
    value: "female",
  },
];

export const statusOptions = [
  {
    label: "ក្រីក្រ",
    value: "poor",
  },
  {
    label: "ធម្មតា",
    value: "normal",
  },
];

export const provinceOptions = [
  { 
    label: "បន្ទាយមានជ័យ",
    value: "banteaymeanchey",
    children: [
      { 
        label: "សង្កែ", 
        value: "sangkae",
        children: [
          {
            label: "នរា",
            value: "norea",
            children: [
              {
                label: "នរា២",
                value: "noreaII"
              }
            ]
          },
          {
            label: "តាប៉ុន",
            value: "ta_pon",
            children: [
              {
                label: "ស្វាយ ស",
                value: "svay_sor"
              }
            ]
          }
        ]
      },
    ]
    },
    {
        label: "បាត់ដំបង", 
        value: "battambang",
        children: [
          { 
            label: "សង្កែ", 
            value: "sangkae",
            children: [
              {
                label: "នរា",
                value: "norea",
                children: [
                  {
                    label: "នរា២",
                    value: "noreaII"
                  }
                ]
              },
              {
                label: "តាប៉ុន",
                value: "ta_pon",
                children: [
                  {
                    label: "ស្វាយ ស",
                    value: "svay_sor"
                  }
                ]
              }
            ]
          },
          {
            label: "បាណន់",
            value: "banan",
            children: [
              {
                label: "Banan Commune",
                value: "banan_commune",
                children: [
                  { label: "Chrab Veal", value: "chrab_veal" },
                  { label: "Beng", value: "beng" },
                  { label: "Anlong Vil", value: "anlong_vil" },
                  { label: "O Muni Muoy", value: "o_muni_muoy" },
                  { label: "O Muni Pir", value: "o_muni_pir" },
                  { label: "Chumnik", value: "chumnik" },
                  { label: "Puk Chhma", value: "puk_chhma" },
                  { label: "Spong", value: "spong" },
                  { label: "Svay Kang", value: "svay_kang" }
                ]
              }
            ]
          },
          {
            label: "ថ្មគោល",
            value: "thma_koul",
            children: [
              {
                label: "Thma Koul Commune",
                value: "thma_koul_commune",
                children: [
                  { label: "Boeng Tuem", value: "boeng_tuem" },
                  { label: "Svay Sa", value: "svay_sa" },
                  { label: "Samdach", value: "samdach" },
                  { label: "Basaet", value: "basaet" },
                  { label: "Ta Pon", value: "ta_pon" }
                ]
              }
            ]
          },
          {
            label: "បវេល",
            value: "bavel",
            children: [
              {
                label: "Bavel Commune",
                value: "bavel_commune",
                children: [
                  { label: "Chhung Tradak", value: "chhung_tradak" },
                  { label: "Pou Battambang", value: "pou_battambang" },
                  { label: "Ambaeng Thngae", value: "ambaeng_thngae" },
                  { label: "Roka", value: "roka" },
                  { label: "Ta Haen Muoy", value: "ta_haen_muoy" },
                  { label: "Ta Haen Pi", value: "ta_haen_pi" }
                ]
              }
            ]
          },
          {
            label: "ឯកភ្នំ",
            value: "aek_phnom",
            children: [
              {
                label: "Aek Phnom Commune",
                value: "aek_phnom_commune",
                children: [
                  { label: "Prey Chaek", value: "prey_chaek" },
                  { label: "Panhnha", value: "panhnha" },
                  { label: "Kralanh", value: "kralanh" },
                  { label: "Andoung Trach", value: "andoung_trach" },
                  { label: "Srah Kaev", value: "srah_kaev" }
                ]
              }
            ]
          },
          {
            label: "មោងឫស្សី",
            value: "moung_ruessei",
            children: [
              {
                label: "Moung Ruessei Commune",
                value: "moung_ruessei_commune",
                children: [
                  { label: "Sambok Ak", value: "sambok_ak" },
                  { label: "Sala Trav", value: "sala_trav" },
                  { label: "Kach Roteh", value: "kach_roteh" },
                  { label: "Thmei", value: "thmei" },
                  { label: "Os Touk", value: "os_touk" },
                  { label: "Kbal Thnal", value: "kbal_thnal" }
                ]
              }
            ]
          },
          {
            label: "រតនមណ្ឌល",
            value: "rotanak_mondol",
            children: [
              {
                label: "Rotanak Mondol Commune",
                value: "rotanak_mondol_commune",
                children: [
                  { label: "Wat Ta Meum", value: "wat_ta_meum" },
                  { label: "Baoh Pou", value: "baoh_pou" },
                  { label: "O Khcheay", value: "o_khcheay" },
                  { label: "O Sralau", value: "o_sralau" },
                  { label: "Wat Chaeng", value: "wat_chaeng" },
                  { label: "Samraong Kaong", value: "samraong_kaong" }
                ]
              }
            ]
          },
          {
            label: "សំឡូត",
            value: "samlout",
            children: [
              {
                label: "Samlout Commune",
                value: "samlout_commune",
                children: [
                  { label: "O Dambang", value: "o_dambang" },
                  { label: "Svay Chrum", value: "svay_chrum" },
                  { label: "Kampong Mdaok", value: "kampong_mdaok" },
                  { label: "Svay Thum", value: "svay_thum" },
                  { label: "Dampouk Khpos", value: "dampouk_khpos" },
                  { label: "Tuol Lveang", value: "tuol_lveang" }
                ]
              }
            ]
          },
          {
            label: "សំពៅលូន",
            value: "sampov_loun",
            children: [
              {
                label: "Sampov Loun Commune",
                value: "sampov_loun_commune",
                children: [
                  { label: "Kampong Ampil", value: "kampong_ampil" },
                  { label: "Kampong Chlang", value: "kampong_chlang" },
                  { label: "O Sralau", value: "o_sralau" },
                  { label: "O Khcheay", value: "o_khcheay" },
                  { label: "Sla Kram", value: "sla_kram" },
                  { label: "Anlong Lvea", value: "anlong_lvea" }
                ]
              }
            ]
          },
          {
            label: "ភ្នំព្រឹក",
            value: "phnum_proek",
            children: [
              {
                label: "Phnum Proek Commune",
                value: "phnum_proek_commune",
                children: [
                  { label: "Wat Ta Meum", value: "wat_ta_meum" },
                  { label: "Kampong Ampil", value: "kampong_ampil" },
                  { label: "Kampong Chlang", value: "kampong_chlang" },
                  { label: "O Sralau", value: "o_sralau" },
                  { label: "O Khcheay", value: "o_khcheay" }
                ]
              }
            ]
          }
        ]
      },
  { label: "កំពង់ចាម", 
    value: "kampongcham",
    children: [
      { 
        label: "សង្កែ", 
        value: "sangkae",
        children: [
          {
            label: "នរា",
            value: "norea",
            children: [
              {
                label: "នរា២",
                value: "noreaII"
              }
            ]
          },
          {
            label: "តាប៉ុន",
            value: "ta_pon",
            children: [
              {
                label: "ស្វាយ ស",
                value: "svay_sor"
              }
            ]
          }
        ]
      },
    ]
  },

  { label: "កំពង់ឆ្នាំង", 
    value: "kampongchhnang",
    children: [
      { 
        label: "សង្កែ", 
        value: "sangkae",
        children: [
          {
            label: "នរា",
            value: "norea",
            children: [
              {
                label: "នរា២",
                value: "noreaII"
              }
            ]
          },
          {
            label: "តាប៉ុន",
            value: "ta_pon",
            children: [
              {
                label: "ស្វាយ ស",
                value: "svay_sor"
              }
            ]
          }
        ]
      },
    ]
  },

  { label: "កំពង់ស្ពឺ", value: "kampongspeu" },
  
  { label: "កំពង់ធំ", value: "kampongthom" },
  { label: "កំពត", value: "kampot" },
  { label: "កណ្តាល", value: "kandal" },
  { label: "កែប", value: "kep" },
  { label: "កោះកុង", value: "kohkong" },
  { label: "ក្រចេះ", value: "kratie" },
  { label: "មណ្ឌលគិរី", value: "mondulkiri" },
  { label: "ឧត្តរមានជ័យ", value: "oddarmeanchey" },
  { label: "ប៉ៃលិន", value: "pailin" },
  { label: "ភ្នំពេញ", value: "phnompenh" },
  { label: "ព្រះសីហនុ", value: "preahsihanouk" },
  { label: "ព្រះវិហារ", value: "preahvihear" },
  { label: "ព្រៃវែង", value: "preyveng" },
  { label: "ពោធិ៍សាត់", value: "pursat" },
  { label: "រតនគិរី", value: "ratanakiri" },
  { label: "សៀមរាប", value: "siemreap" },
  { label: "ស្ទឹងត្រែង", value: "stungtreng" },
  { label: "ស្វាយរៀង", value: "svayrieng" },
  { label: "តាកែវ", value: "takeo" },
  { label: "ត្បូងឃ្មុំ", value: "tboungkhmum" }
];

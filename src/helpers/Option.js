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
    label: "កម្រិត១",
    value: "level1",
  },
  {
    label: "កម្រិត២",
    value: "level2",
  },
];

export const studentstatus = [
  {
    label: "កំពុងសិក្សា",
    value: "active",
  },
  {
    label: "បញ្ចប់ការសិក្សា",
    value: "graduate",
  },
  {
    label: "ព្យួរការសិក្សា",
    value: "suspend",
  },
  {
    label: "ឈប់រៀន",
    value: "inactive",
  },
];

export const provinceOptions = [
  { 
    label: "បាត់ដំបង",
    value: "battambang",
    children: [
      {
        label: "បាណន់",
        value: "banon",
        children: [
          {
            label: "កន្ទឺ ១",
            value: "kantueu1",
            children: [
              { label: "ថ្មី", value: "ថ្មី" },
              { label: "ទួលធ្នង់", value: "ទួលធ្នង់" },
              { label: "ស្វាយព្រៃ", value: "ស្វាយព្រៃ" },
              { label: "ស្វាយបីដើម", value: "ស្វាយបីដើម" },
              { label: "កំពង់អំពិល", value: "កំពង់អំពិល" },
              { label: "សសរពក", value: "សសរពក" },
              { label: "វត្តកន្ទឺ", value: "វត្តកន្ទឺ" }
            ]
          },
          {
            label: "កន្ទឺ ២",
            value: "kantueu2",
            children: [
              { label: "ប៉ុស្តិ៍កន្ទឺ", value: "ប៉ុស្តិ៍កន្ទឺ" },
              { label: "ចំការអូរ", value: "ចំការអូរ" },
              { label: "បាណន់", value: "បាណន់" },
              { label: "កំប៉ង់លិច", value: "កំប៉ង់លិច" },
              { label: "កំប៉ង់កើត", value: "កំប៉ង់កើត" },
              { label: "ឆាយរំពាត់", value: "ឆាយរំពាត់" },
              { label: "ភ្នំគល់", value: "ភ្នំគល់" }
            ]
          },
          {
            label: "បាយដំរាំ",
            value: "baydamram",
            children: [
              { label: "ទួលច្រនៀង", value: "ទួលច្រនៀង" },
              { label: "កំពង់ចែង", value: "កំពង់ចែង" },
              { label: "ក្រញ្ចាង", value: "ក្រញ្ចាង" },
              { label: "ក្រទ្បាពាស", value: "ក្រទ្បាពាស" },
              { label: "បាយដំរាំ", value: "បាយដំរាំ" },
              { label: "តាស៊ង", value: "តាស៊ង" },
              { label: "ស្តៅ", value: "ស្តៅ" },
              { label: "ព្រៃទទឹង", value: "ព្រៃទទឹង" }
            ]
          },
          {
            label: "ឈើទាល",
            value: "chheuteal",
            children: [
              { label: "កំពង់ចំលង", value: "កំពង់ចំលង" },
              { label: "ឈើទាល", value: "ឈើទាល" },
              { label: "កំពង់ស្រម៉", value: "កំពង់ស្រម៉" },
              { label: "ខ្នារ", value: "ខ្នារ" },
              { label: "ន្ទជិត", value: "ន្ទជិត" },
              { label: "បត់សាលា", value: "បត់សាលា" },
              { label: "ស្វាយប្រគាប", value: "ស្វាយប្រគាប" },
              { label: "ឆកពោធិ៍", value: "ឆកពោធិ៍" },
              { label: "អន្លង់តាមី", value: "អន្លង់តាមី" },
              { label: "ចំការស្វាយ", value: "ចំការស្វាយ" },
              { label: "ថ្កូវ", value: "ថ្កូវ" },
              { label: "ប្របុះ", value: "ប្របុះ" },
              { label: "ដូង", value: "ដូង" },
              { label: "អន្លក់កោង", value: "អន្លក់កោង" }
            ]
          },
          {
            label: "ចែងមានជ័យ",
            value: "chaengmeanchey",
            children: [
              { label: "រូង", value: "រូង" },
              { label: "ចែង", value: "ចែង" },
              { label: "កំពង់គល់ថ្មី", value: "កំពង់គល់ថ្មី" },
              { label: "ធ្ង័រ", value: "ធ្ង័រ" },
              { label: "បុះខ្នុរ", value: "បុះខ្នុរ" },
              { label: "ចង្អូរស្វាយ", value: "ចង្អូរស្វាយ" },
              { label: "ដូង", value: "ដូង" }
            ]
          },
          {
            label: "ភ្នំសំពៅ",
            value: "phnumsampov",
            children: [
              { label: "ចែងក្តារ", value: "ចែងក្តារ" },
              { label: "កំប៉ូវ", value: "កំប៉ូវ" },
              { label: "គោកអំពិល", value: "គោកអំពិល" },
              { label: "សំពៅលិច", value: "សំពៅលិច" },
              { label: "សំពៅកើត", value: "សំពៅកើត" },
              { label: "សំណាញ់", value: "សំណាញ់" },
              { label: "ក្តោង", value: "ក្តោង" },
              { label: "ក្រពើជើង", value: "ក្រពើជើង" },
              { label: "ក្រពើត្បូង", value: "ក្រពើត្បូង" },
              { label: "ក្រពើកើត", value: "ក្រពើកើត" }
            ]
          },
          {
            label: "ស្នឹង",
            value: "snoeng",
            children: [
              { label: "សំរោង", value: "សំរោង" },
              { label: "គរ", value: "គរ" },
              { label: "ស្នឹងលិច", value: "ស្នឹងលិច" },
              { label: "ស្នឹងកើត", value: "ស្នឹងកើត" },
              { label: "បឹងចែង", value: "បឹងចែង" },
              { label: "បឹងប្រី", value: "បឹងប្រី" },
              { label: "ពាក់ស្បែក", value: "ពាក់ស្បែក" },
              { label: "ព្រះស្រែ", value: "ព្រះស្រែ" },
              { label: "រំជី", value: "រំជី" },
              { label: "សំបួរមាស", value: "សំបួរមាស" },
              { label: "បឹងក្រសាល", value: "បឹងក្រសាល" }
            ]
          },
          {
            label: "តាគ្រាម",
            value: "takream",
            children: [
              { label: "ប៉ោយស្វាយ", value: "ប៉ោយស្វាយ" },
              { label: "តាគ្រាម", value: "តាគ្រាម" },
              { label: "ថ្មី", value: "ថ្មី" },
              { label: "អូរពងមាន់", value: "អូរពងមាន់" },
              { label: "តាង៉ែន", value: "តាង៉ែន" },
              { label: "ព្រៃផ្ដៅ", value: "ព្រៃផ្ដៅ" },
              { label: "អូរតាញា", value: "អូរតាញា" },
              { label: "អន្លង់ស្វាយ", value: "អន្លង់ស្វាយ" },
              { label: "ដង្គត់ថ្នុង", value: "ដង្គត់ថ្នុង" },
              { label: "ស្លាបបាំង", value: "ស្លាបបាំង" },
              { label: "អណ្ដូងនាង", value: "អណ្ដូងនាង" }
            ]
          }
        ]
      },
      { 
        label: "គាស់ក្រឡ", 
        value: "គាល់ក្រឡ",
        children: [
          {
            label: "ឆ្នាលមាន់",
            value: "ឆ្នាលមាន់",
            children: [
              { label: "ក្រាំងស្វាត", value: "ក្រាំងស្វាត" },
              { label: "បន្ទាយចារ", value: "បន្ទាយចារ" },
              { label: "ព្រៃសិន", value: "ព្រៃសិន" },
              { label: "ព្រៃទទឹង", value: "ព្រៃទទឹង" },
              { label: "សំរោង", value: "សំរោង" },
              { label: "ឫស្សីព្រះ", value: "ឫស្សីព្រះ" },
              { label: "ឆ្នាល់មាន់", value: "ឆ្នាល់មាន់" }            
            ]
          },
          {
            label: "ដូនបា",
            value: "ដូនបា",
            children: [
              { label: "បាស្រែ", value: "បាស្រែ" },
              { label: "ដូនបា", value: "ដូនបា" },
              { label: "ព្រៃភ្ញាស", value: "ព្រៃភ្ញាស" },
              { label: "ទួលលៀប", value: "ទួលលៀប" },
              { label: "គោករកា", value: "គោករកា" },
              { label: "ខ្លែងគង់", value: "ខ្លែងគង់" },
              { label: "ខ្វែង", value: "ខ្វែង" },
              { label: "ព្រៃប៉ែន", value: "ព្រៃប៉ែន" }
            ]
          },
          {
            label: "ហប់",
            value: "ហប់",
            children: [
              { label: "ហប់", value: "ហប់" },
              { label: "ចំបក់", value: "ចំបក់" },
              { label: "សំបូរ", value: "សំបូរ" },
              { label: "សាមគ្គី", value: "សាមគ្គី" },
              { label: "ត្រពាំងដងទឹក", value: "ត្រពាំងដងទឹក" },
              { label: "គោកត្រុំ", value: "គោកត្រុំ" },
              { label: "ស្លែងជួរ", value: "ស្លែងជួរ" }
            ]
          },
          {
            label: "គាស់ក្រឡ",
            value: "គាស់ក្រឡ",
            children: [
              { label: "គាស់ក្រឡ", value: "គាស់ក្រឡ" },
              { label: "ស្ពាន", value: "ស្ពាន" },
              { label: "មុខវត្ត", value: "មុខវត្ត" },
              { label: "ទួលបល្ល័ង្ក", value: "ទួលបល្ល័ង្ក" },
              { label: "ទួលតាមឹម", value: "ទួលតាមឹម" },
              { label: "ថ្មី", value: "ថ្មី" },
              { label: "ព្រៃពពាល", value: "ព្រៃពពាល" },
              { label: "បឹងឈ្នះ", value: "បឹងឈ្នះ" },
              { label: "ដំណាក់កកោះ", value: "ដំណាក់កកោះ" }
            ]
          },
          {
            label: "ព្រះផុស",
            value: "ព្រះផុស",
            children: [
              { label: "សាច់ហាប់", value: "សាច់ហាប់" },
              { label: "បឹងព្រះ", value: "បឹងព្រះ" },
              { label: "ព្រៃផ្តៅ", value: "ព្រៃផ្តៅ" },
              { label: "កាប់ព្រិច", value: "កាប់ព្រិច" },
              { label: "តាខោ", value: "តាខោ" },
              { label: "កុយវែង", value: "កុយវែង" },
              { label: "ព្រៃចក", value: "ព្រៃចក" },
              { label: "តានួត", value: "តានួត" },
              { label: "បឹងព្រះក្រឡាញ់", value: "បឹងព្រះក្រឡាញ់" }
            ]
          },
          {
            label: "ធិបតី",
            value: "ធិបតី",
            children: [
              { label: "រ៉ា", value: "រ៉ា" },
              { label: "សំរោង", value: "សំរោង" },
              { label: "ឆាយបល្ល័ង្ក", value: "ឆាយបល្ល័ង្ក" },
              { label: "ជើងទេញ", value: "ជើងទេញ" },
              { label: "តាថុក", value: "តាថុក" },
              { label: "កន្ទួត", value: "កន្ទួត" },
              { label: "គោកពោន", value: "គោកពោន" },
              { label: "បឹងស្នោ", value: "បឹងស្នោ" },
              { label: "ទួលម្ទេស", value: "ទួលម្ទេស" },
              { label: "កូនព្រហ្ម", value: "កូនព្រហ្ម" },
              { label: "បឹងរាំង", value: "បឹងរាំង" }
            ]
          }
        ],
      },
      {
        label: "រុក្ខគិរី", 
        value: "រុក្ខគិរី",
        children: [
          {
            label: "បាសាក់",
            value: "បាសាក់",
            children: [
              { label: "កែវមុន្នី", value: "កែវមុន្នី" },
              { label: "កំរ៉ែង", value: "កំរ៉ែង" },
              { label: "ច្រាំងខ្ពស់", value: "ច្រាំងខ្ពស់" },
              { label: "ឈូក", value: "ឈូក" },
              { label: "តាព្រាល", value: "តាព្រាល" },
              { label: "បាសាក់", value: "បាសាក់" },
              { label: "បុស្សដូង", value: "បុស្សដូង" },
              { label: "ពងទឹក", value: "ពងទឹក" },
              { label: "អូររំចេក", value: "អូររំចេក" }
            ]
          },
          {
            label: "ព្រែកជីក",
            value: "ព្រែកជីក",
            children: [
              { label: "ខ្នាចអំពរ", value: "ខ្នាចអំពរ" },
              { label: "អូររំចេក ", value: "អូររំចេក" },
              { label: "សៀម", value: "សៀម" },
              { label: "ព្រែកតាវេន", value: "ព្រែកតាវេន" },
              { label: "ព្រែកជីក", value: "ព្រែកជីក" },
              { label: "បឹងអំពិល", value: "បឹងអំពិល" },
              { label: "បឹងធ្មួយ", value: "បឹងធ្មួយ" },
              { label: "ថ្នំ", value: "ថ្នំ" },
              { label: "ឆ្កែខាំប្រើស", value: "ឆ្កែខាំប្រើស" }
            ]
          },
          {
            label: "ព្រែត្រឡាច",
            value: "ព្រែត្រឡាច",
            children: [
              { label: "ចុងពរ", value: "ចុងពរ" },
              { label: "បឹងចក ", value: "បឹងចក" },
              { label: "ប៉ែន", value: "ប៉ែន" },
              { label: "ព្រៃខ្លូត", value: "ព្រៃខ្លូត" },
              { label: "ព្រៃត្រឡាច", value: "ព្រៃត្រឡាច" },
              { label: "រូង", value: "រូង" },
              { label: "រូង២", value: "រូង២" },
              { label: "ស្រះថត", value: "ស្រះថត" }
            ]
          },
          {
            label: "មុខរាហ៍",
            value: "មុខរាហ៍", 
            children: [ 
           { label: "ស្រះគុយ", value: "ស្រះគុយ" }, 
           { label: "មុខរាហ៍ ២", value: "មុខរាហ៍ ២" }, 
           { label: "ស្វាយយ៉ា", value: "ស្វាយយ៉ា" }, 
           { label: "ទួលស្វាយ", value: "ទួលស្វាយ" }, 
           { label: "តាព្រាត", value: "តាព្រាត" }, 
           { label: "មុខរាហ៍ ១", value: "មុខរាហ៍ ១" }, 
           { label: "ដង្ហោ", value: "ដង្ហោ" } 
           ]           
          },
          {
            label: "ស្តុកប្រវឹក", 
            value: "ស្តុកប្រវឹក", 
            children: [ 
            { label: "ស្តុកប្រវឹក", value: "ស្តុកប្រវឹក" }, 
            { label: "ក្រុមទី១០", value: "ក្រុមទី១០" }, 
            { label: "ភូមិស្តុកប្រវឹក", value: "ភូមិស្តុកប្រវឹក" }
             ]            
          }
        ],
      },
      {  
        label: "បាត់ដំបង", 
        value: "បាត់ដំបង",
        children: [
          {
            label: "ទួលតាឯក",
            value: "ទួលតាឯក",
            children: [
              { label: "អូរតាគាំ ១", value: "អូរតាគាំ ១" },
              { label: "អូរតាគាំ ២", value: "អូរតាគាំ ២" },
              { label: "អូរតាគាំ ៣", value: "អូរតាគាំ ៣" },
              { label: "ទួលតាឯក", value: "ទួលតាឯក" },
              { label: "ដង្កោទាប", value: "ដង្កោទាប" }
            ]            
          },
          {
            label: "ព្រែកព្រះស្តេច",
            value: "ព្រែកព្រះស្តេច",
            children: [
              { label: "ព្រែកព្រះស្តេច", value: "ព្រែកព្រះស្តេច" },
              { label: "ព្រែកតាតន់", value: "ព្រែកតាតន់" },
              { label: "១៣ មករា", value: "១៣ មករា" },
              { label: "អូរខ្ជាយ", value: "អូរខ្ជាយ" },
              { label: "ឡឥដ្ឋ", value: "ឡឥដ្ឋ" },
              { label: "នំក្រៀប", value: "នំក្រៀប" },
              { label: "បែកចានថ្មី", value: "បែកចានថ្មី" },
              { label: "ចំការប្ញស្សី", value: "ចំការប្ញស្សី" }
            ]            
          },
          {
            label: "រតនៈ",
            value: "រតនៈ",
            children: [
              { label: "រំចេក ១", value: "រំចេក ១" },
              { label: "រំចេក ២", value: "រំចេក ២" },
              { label: "រំចេក ៣", value: "រំចេក ៣" },
              { label: "រំចេក ៤", value: "រំចេក ៤" },
              { label: "រំចេក ៥", value: "រំចេក ៥" },
              { label: "សូភី ១", value: "សូភី ១" },
              { label: "សូភី ២", value: "សូភី ២" },
              { label: "រតនៈ", value: "រតនៈ" }
            ] 
          },
          {
            label: "ចំការសំរោង",
            value: "ចំការសំរោង",
            children: [
              { label: "ចំការសំរោង ១", value: "ចំការសំរោង ១" },
              { label: "ចំការសំរោង ២", value: "ចំការសំរោង ២" },
              { label: "វត្តលៀប", value: "វត្តលៀប" },
              { label: "វត្តរំដួល", value: "វត្តរំដួល" },
              { label: "ផ្កាស្លា", value: "ផ្កាស្លា" }
            ]            
          },
          {
            label: "ស្លាកែត",
            value: "ស្លាកែត",
            children: [
              { label: "ស្លាកែត", value: "ស្លាកែត" },
              { label: "ដាំស្ពៃ", value: "ដាំស្ពៃ" },
              { label: "ជ្រៃកោង", value: "ជ្រៃកោង" }
            ]            
          },
          {
            label: "ក្តុលដូនទាវ",
            value: "ក្តុលដូនទាវ",
            children: [
              { label: "ចុងព្រែក", value: "ចុងព្រែក" },
              { label: "ក្តុល", value: "ក្តុល" },
              { label: "អូរតានប់", value: "អូរតានប់" },
              { label: "តាព្រួច", value: "តាព្រួច" },
              { label: "តាកុយ", value: "តាកុយ" },
              { label: "កន្ទួត", value: "កន្ទួត" },
              { label: "ថ្កូវ", value: "ថ្កូវ" }
            ]            
          },
          {
            label: "អូរម៉ាល",
            value: "អូរម៉ាល",
            children: [
              { label: "អូរម៉ាល", value: "អូរម៉ាល" },
              { label: "ដាក់សសរ", value: "ដាក់សសរ" },
              { label: "សាលាបាឡាត់", value: "សាលាបាឡាត់" },
              { label: "ព្រៃដាច់", value: "ព្រៃដាច់" },
              { label: "គោកពន្លៃ", value: "គោកពន្លៃ" },
              { label: "វត្តរកា", value: "វត្តរកា" },
              { label: "កូនសេក", value: "កូនសេក" },
              { label: "អណ្តូងព្រីង", value: "អណ្តូងព្រីង" },
              { label: "បឹងរាំង", value: "បឹងរាំង" },
              { label: "ព្រៃរកា", value: "ព្រៃរកា" }
            ]            
          },
          {
            label: "វត្តគរ",
            value: "វត្តគរ",
            children: [
              { label: "វត្តគរ", value: "វត្តគរ" },
              { label: "ច្រាបក្រសាំង", value: "ច្រាបក្រសាំង" },
              { label: "បល្ល័ង្គ", value: "បល្ល័ង្គ" },
              { label: "ខ្សាច់ពោយ", value: "ខ្សាច់ពោយ" },
              { label: "ដំណាក់ហ្លួង", value: "ដំណាក់ហ្លួង" },
              { label: "កំពង់សីមា", value: "កំពង់សីមា" }
            ]            
          },
          {
            label: "អូរចារ",
            value: "អូរចារ",
            children: [
              { label: "អូរចារ", value: "អូរចារ" },
              { label: "ព្រៃកូនសេក", value: "ព្រៃកូនសេក" },
              { label: "កាប់គោថ្មី", value: "កាប់គោថ្មី" },
              { label: "អណ្តូងចេញ", value: "អណ្តូងចេញ" },
              { label: "អញ្ចាញ", value: "អញ្ចាញ" },
              { label: "អង់", value: "អង់" }
            ]            
          },
          {
            label: "ស្វាយប៉ោ",
            value: "ស្វាយប៉ោ",
            children: [
              { label: "ព្រែកមហាទេព", value: "ព្រែកមហាទេព" },
              { label: "កំពង់ក្របី", value: "កំពង់ក្របី" },
              { label: "២០ ឧសភា", value: "២០ ឧសភា" },
              { label: "កម្មករ", value: "កម្មករ" }
            ]
          }
        ],
      },
      {
        label: "ថ្មគោល", 
        value: "ថ្មគោល",
        children: [
          {
            label: "តាពូង",
            value: "តាពូង",
            children: [
              { label: "ភូមិថ្មគោលត្បូង", value: "ភូមិថ្មគោលត្បូង" },
              { label: "ភូមិប៉ោយយ៉ង់", value: "ភូមិប៉ោយយ៉ង់" },
              { label: "ភូមិកសិកម្ម", value: "ភូមិកសិកម្ម" },
              { label: "ភូមិប៉ោយសំរោង", value: "ភូមិប៉ោយសំរោង" },
              { label: "ភូមិគោកក្តួច", value: "ភូមិគោកក្តួច" },
              { label: "ភូមិអង់ត្បូង", value: "ភូមិអង់ត្បូង" },
              { label: "ភូមិទំពូងត្បូង", value: "ភូមិទំពូងត្បូង" }            
            ]
          },
         {
            label: "តាម៉ឺន",
            value: "តាម៉ឺន",
            children: [
              { label: "ភូមិថ្មគោលជើង", value: "ភូមិថ្មគោលជើង" },
              { label: "ភូមិគោកត្រប់", value: "ភូមិគោកត្រប់" },
              { label: "ភូមិទំនាប", value: "ភូមិទំនាប" },
              { label: "ភូមិតាសី", value: "ភូមិតាសី" },
              { label: "ភូមិជ្រោយម្ទេស", value: "ភូមិជ្រោយម្ទេស" },
              { label: "ភូមិក្រសាំង", value: "ភូមិក្រសាំង" },
              { label: "ភូមិសំរោង", value: "ភូមិសំរោង" },
              { label: "ភូមិថ្មី", value: "ភូមិថ្មី" },
              { label: "ភូមិអង់ជើង", value: "ភូមិអង់ជើង" },
              { label: "ភូមិទំពូងជើង", value: "ភូមិទំពូងជើង" }
            ]
          },
          {
            label: "អូរតាគី",
            value: "អូរតាគី",
            children: [
              { label: "ភូមិអូរតាគី", value: "ភូមិអូរតាគី" },
              { label: "ភូមិពពាលខែ", value: "ភូមិពពាលខែ" },
              { label: "ភូមិវាលទ្រា", value: "ភូមិវាលទ្រា" },
              { label: "ភូមិត្រស់", value: "ភូមិត្រស់" },
              { label: "ភូមិព្រៃទទឹង", value: "ភូមិព្រៃទទឹង" },
              { label: "ភូមិព្រៃដាច់", value: "ភូមិព្រៃដាច់" },
              { label: "ភូមិត្រាង", value: "ភូមិត្រាង" },
              { label: "ភូមិកកោះ", value: "ភូមិកកោះ" }
            ]
          },
          {
            label: "ជ្រៃ",
            value: "ជ្រៃ",
            children: [
              { label: "ភូមិជ្រៃថ្មី", value: "ភូមិជ្រៃថ្មី" },
              { label: "ភូមិជ្រៃ", value: "ភូមិជ្រៃ" },
              { label: "ភូមិកគោ", value: "ភូមិកគោ" },
              { label: "ភូមិស្វាយជ្រំ", value: "ភូមិស្វាយជ្រំ" },
              { label: "ភូមិក្បាលខ្មោច", value: "ភូមិក្បាលខ្មោច" },
              { label: "ភូមិព្រៃទទឹង", value: "ភូមិព្រៃទទឹង" },
              { label: "ភូមិហៃសាន", value: "ភូមិហៃសាន" },
              { label: "ភូមិពពាលខែ", value: "ភូមិពពាលខែ" },
              { label: "ភូមិអន្លង់រុន", value: "ភូមិអន្លង់រុន" },
              { label: "ភូមិក្រួស", value: "ភូមិក្រួស" }
            ]
          },
          {
            label: "អន្លង់រុន",
            value: "អន្លង់រុន",
            children: [
              { label: "ភូមិចារ", value: "ភូមិចារ" },
              {label: "ភូមិស្លាស្លាក់", value: "ភូមិស្លាស្លាក់" },
              {label: "ភូមិចបកាប់", value: "ភូមិចបកាប់" },
              {label: "ភូមិសូភី", value: "ភូមិសូភី" },
              {label: "ភូមិក្រួស", value: "ភូមិក្រួស" }
            ]
          },
          {
            label: "ជ្រោយស្តៅ",
            value: "ជ្រោយស្តៅ",
            children: [
              { label: "ភូមិជ្រោយស្តៅ", value: "ភូមិជ្រោយស្តៅ" },
              { label: "ភូមិនិគមក្រៅ", value: "ភូមិនិគមក្រៅ" },
              { label: "ភូមិនិគមក្នុង", value: "ភូមិនិគមក្នុង" }
            ]
          },
          {
            label: "បឹងព្រីង",
            value: "បឹងព្រីង",
            children: [
              { label: "ភូមិបឹងព្រីង", value: "ភូមិបឹងព្រីង" },
              { label: "ភូមិអូរញរ", value: "ភូមិអូរញរ" },
              { label: "ភូមិស្នូលកោង", value: "ភូមិស្នូលកោង" },
              { label: "ភូមិប៉ោយតាសេក", value: "ភូមិប៉ោយតាសេក" }
            ]
          },
          {
            label: "គោកឃ្មុំ",
            value: "គោកឃ្មុំ",
            children: [
              { label: "ភូមិកៀនកែស ១", value: "ភូមិកៀនកែស ១" },
              { label: "ភូមិកៀនកែស ២", value: "ភូមិកៀនកែស ២" },
              { label: "ភូមិតាមាឃ", value: "ភូមិតាមាឃ" },
              { label: "ភូមិច្រនៀង", value: "ភូមិច្រនៀង" },
            ]
          }
        ],
      },
      {
        label: "កំរៀង", 
        value: "កំរៀង",
        children: [
          {
            label: "កំរៀង",
            value: "កំរៀង",
            children: [
              { label: "កំរៀង", value: "កំរៀង" },
              { label: "ស្វាយរែង", value: "ស្វាយរែង" },
              { label: "ស្វាយស", value: "ស្វាយស" },
              { label: "ស្រឡៅទង", value: "ស្រឡៅទង" },
              { label: "អូរជ្រៃ", value: "អូរជ្រៃ" },
              { label: "បឹងអូរជាង", value: "បឹងអូរជាង" },
            ]
          },
          {
            label: "អូរដា", 
            value: "អូរដា",
            children: [
              { label: "កណ្តាល", value: "កណ្តាល" },
              { label: "ស្វាយជ្រំ", value: "ស្វាយជ្រំ" },
              { label: "អូរគគីរ", value: "អូរគគីរ" },
              { label: "អូរដា", value: "អូរដា" },
              { label: "ថ្មី", value: "ថ្មី" },
              { label: "កំពង់ឡី", value: "កំពង់ឡី" },
              { label: "វាលលំផាត់", value: "វាលលំផាត់" },           
              { label: "ម្នាស់កាល់", value: "ម្នាស់កាល់" },    
              { label: "សំរោង", value: "សំរោង" },            
              { label: "តាំងយូ", value: "តាំងយូ" } 
            ]
          },
          {
            label: "បឹងរាំង", 
            value: "បឹងរាំង",
            children: [
              { label: "ដូង", value: "ដូង" },
              { label: "អូរដាលើ", value: "អូរដាលើ" },
              { label: "អូរក្រូច", value: "អូរក្រូច" },
              { label: "ស្វាយធំ", value: "ស្វាយធំ" },
              { label: "បឹងរាំង", value: "បឹងរាំង" },
              { label: "ព្រះពុទ្ធ", value: "ព្រះពុទ្ធ" },
            ]
          },
          {
            label: "ត្រាង", 
            value: "ត្រាង",
            children: [
              { label: "ត្រាង", value: "ត្រាង" },
              { label: "កណ្តាល", value: "កណ្តាល" },
              { label: "ស្វាយព្រៃ", value: "ស្វាយព្រៃ" },
              { label: "ថ្មី", value: "ថ្មី" },
              { label: "ល្វាទេ", value: "ល្វាទេ" },
              { label: "តាសែន", value: "តាសែន" },
              { label: "អូរគគីរ", value: "អូរគគីរ" },
              { label: "អូរចំបក់", value: "អូរចំបក់" },
              { label: "ភ្នំមួយរយ", value: "ភ្នំមួយរយ" },
            ]
          },
          {
            label: "តាសែន", 
            value: "តាសែន",
            children: [
              { label: "ដីក្រហម", value: "ដីក្រហម" },
              { label: "អូរចម្លង", value: "អូរចម្លង" },
              { label: "អូរអន្លក់", value: "អូរអន្លក់" },
              { label: "អូរទឹកថ្លា", value: "អូរទឹកថ្លា" },
            ]    
          },
          {
            label: "តាក្រី", 
            value: "តាក្រី",
            children: [
              { label: "ដំណាក់សាលា", value: "ដំណាក់សាលា" },
              { label: "កំពង់ចម្លងលើ", value: "កំពង់ចម្លងលើ" },
              { label: "កំពង់ចម្លងក្រោម", value: "កំពង់ចម្លងក្រោម" },
              { label: "កំប្រង់", value: "កំប្រង់" },
              { label: "ស្រះទឹកថ្មី", value: "ស្រះទឹកថ្មី" },
              { label: "សាមសិប", value: "សាមសិប" },
              { label: "ស្រះកំប៉ោក", value: "ស្រះកំប៉ោក" },
              { label: "តាក្រី", value: "តាក្រី" },
              { label: "ទួលទិល", value: "ទួលទិល" },
            ]
          }
        ],
      },
      {
        label: "បរិល", 
        value: "បវិល",
        children: [
          {
            label: "បវេល",
            value: "បវេល",
            children: [
              { label: "បវេល ១", value: "បវេល ១" },
              { label: "បវេល ២", value: "បវេល ២" },
              { label: "ទំនប់ទឹក", value: "ទំនប់ទឹក" },
              { label: "ដាច់ព្រ័ត្រ", value: "ដាច់ព្រ័ត្រ" },
              { label: "សង្កែវារ", value: "សង្កែវារ" },
              { label: "ពាម", value: "ពាម" },
              { label: "កំពង់ព្នៅ", value: "កំពង់ព្នៅ" },
              { label: "ស្ទឹងដាច់", value: "ស្ទឹងដាច់" },
              { label: "ស្ពានកណ្តាល", value: "ស្ពានកណ្តាល" },
              { label: "សាំងរាំង", value: "សាំងរាំង" },
              { label: "ស្វាយជ្រំ", value: "ស្វាយជ្រំ" },
              { label: "ដូនអាវ", value: "ដូនអាវ" },
              { label: "ព្រៃទទឹង ១", value: "ព្រៃទទឹង ១" },
              { label: "ព្រៃទទឹង ២", value: "ព្រៃទទឹង ២" },
              { label: "កំពង់ឆ្នាំង ១", value: "កំពង់ឆ្នាំង ១" },
              { label: "កំពង់ឆ្នាំង ២", value: "កំពង់ឆ្នាំង ២" },
              { label: "គោក", value: "គោក" },
              { label: "ព្រៃចាស់", value: "ព្រៃចាស់" },
              { label: "តានី", value: "តានី" }
            ]            
          },
          {
            label: "ខ្នាចរមាស",
            value: "ខ្នាចរមាស",
            children: [
              { label: "ព្រៃសង្ហា", value: "ព្រៃសង្ហា" },
              { label: "កោះរាម", value: "កោះរាម" },
              { label: "រូងអំពិល", value: "រូងអំពិល" },
              { label: "បល្ល័ង្កលើ", value: "បល្ល័ង្កលើ" },
              { label: "ស្វាយស", value: "ស្វាយស" },
              { label: "ខ្នាចរមាស", value: "ខ្នាចរមាស" },
              { label: "បល្ល័ង្កមានជ័យ", value: "បល្ល័ង្កមានជ័យ" },
              { label: "ជ្រោយស្នា", value: "ជ្រោយស្នា" }
            ]            
          },
          {
            label: "ល្វា",
            value: "ល្វា",
            children: [
              { label: "ល្វា", value: "ល្វា" },
              { label: "ដូនញ៉ែម", value: "ដូនញ៉ែម" },
              { label: "ចំការ", value: "ចំការ" },
              { label: "ដង្កោ", value: "ដង្កោ" },
              { label: "រាមសេនា", value: "រាមសេនា" },
              { label: "ដូនអោក", value: "ដូនអោក" },
              { label: "ពីងពង់", value: "ពីងពង់" },
              { label: "ស្វាយវៃង", value: "ស្វាយវៃង" },
              { label: "បឹងសំរោង", value: "បឹងសំរោង" },
              { label: "ក្បាលស្ពាន", value: "ក្បាលស្ពាន" },
              { label: "ល្វាចាស់", value: "ល្វាចាស់" },
              { label: "តានី", value: "តានី" }
            ]            
          },
          {
            label: "ព្រៃខ្ពស់",
            value: "ព្រៃខ្ពស់",
            children: [
              { label: "ពោធិ", value: "ពោធិ" },
              { label: "ព្រៃខ្ពស់", value: "ព្រៃខ្ពស់" },
              { label: "អូរតាគង់", value: "អូរតាគង់" },
              { label: "អូរតាសោម", value: "អូរតាសោម" },
              { label: "អូរតាសោមថ្មី", value: "អូរតាសោមថ្មី" },
              { label: "អូរតាសោមចាស់", value: "អូរតាសោមចាស់" }
            ]            
          },
          {
            label: "អំពិលប្រាំដើម",
            value: "អំពិលប្រាំដើម",
            children: [
              { label: "ដង្កោក្រម៉ាង", value: "ដង្កោក្រម៉ាង" },
              { label: "សៀម", value: "សៀម" },
              { label: "អំពិល", value: "អំពិល" },
              { label: "ស្ថាពរ", value: "ស្ថាពរ" },
              { label: "តាខៀវ", value: "តាខៀវ" },
              { label: "ប៊ួរុន", value: "ប៊ួរុន" },
              { label: "ដូង", value: "ដូង" },
              { label: "ស្ថាពរ ២", value: "ស្ថាពរ ២" }
            ]            
          },
          {
            label: "ក្តុលតាហែន",
            value: "ក្តុលតាហែន",
            children: [
              { label: "សួនស្លា", value: "សួនស្លា" },
              { label: "ក្តុលក្រោម", value: "ក្តុលក្រោម" },
              { label: "សាន", value: "សាន" },
              { label: "ពាម", value: "ពាម" },
              { label: "កណ្តាល", value: "កណ្តាល" },
              { label: "បួរ", value: "បួរ" },
              { label: "ថ្មី", value: "ថ្មី" },
              { label: "ទួលក្រសាំង", value: "ទួលក្រសាំង" },
              { label: "ក្តុលលើ", value: "ក្តុលលើ" },
              { label: "តាហែន", value: "តាហែន" },
              { label: "ដំណាក់ដំរគោ", value: "ដំណាក់ដំរគោ" },
              { label: "ត្រពាំងក្បាលស្វា", value: "ត្រពាំងក្បាលស្វា" },
              { label: "បឹងអន្លុក", value: "បឹងអន្លុក" },
              { label: "ប្រាប់ហឹប", value: "ប្រាប់ហឹប" },
              { label: "ស្រះទឹក", value: "ស្រះទឹក" },
              { label: "អន្លង់រាយ", value: "អន្លង់រាយ" },
              { label: "តាតុត", value: "តាតុត" },
              { label: "អូរដន់ពោធិ៍", value: "អូរដន់ពោធិ៍" },
              { label: "ឃ្លាំង", value: "ឃ្លាំង" },
              { label: "ច្រង់បាក់", value: "ច្រង់បាក់" },
              { label: "អន្លង់រាំង", value: "អន្លង់រាំង" },
              { label: "បឹងសង្កែ", value: "បឹងសង្កែ" },
              { label: "ទំនប់តាគូន", value: "ទំនប់តាគូន" },
              { label: "ទួលស្នាល", value: "ទួលស្នាល" },
              { label: "ព្រៃធំ", value: "ព្រៃធំ" },
              { label: "កំពង់មកាក់", value: "កំពង់មកាក់" },
              { label: "បូសង្គ្រាច", value: "បូសង្គ្រាច" }
            ]            
          },
          {
            label: "ឃ្លាំងមាស",
            value: "ឃ្លាំងមាស",
            children: [
              { label: "កំពង់ម្កាក់", value: "កំពង់ម្កាក់" },
              { label: "ឃ្លាំង", value: "ឃ្លាំង" },
              { label: "ច្រាំងបាក់", value: "ច្រាំងបាក់" },
              { label: "ត្រពាំងក្បាលស្វា", value: "ត្រពាំងក្បាលស្វា" },
              { label: "ទួលស្នួល", value: "ទួលស្នួល" },
              { label: "ទំនប់តាកួន", value: "ទំនប់តាកួន" },
              { label: "បឹងសង្កែ", value: "បឹងសង្កែ" },
              { label: "បួសង្គ្រាជ", value: "បួសង្គ្រាជ" },
              { label: "ប្រាប់ហឹប", value: "ប្រាប់ហឹប" },
              { label: "ព្រៃធំ", value: "ព្រៃធំ" },
              { label: "ព្រៃព្រាល", value: "ព្រៃព្រាល" },
              { label: "អន្លង់រាំង", value: "អន្លង់រាំង" },
              { label: "អូរដូនពៅ", value: "អូរដូនពៅ" }
            ]            
          },
          {
            label: "បឹងប្រាំ",
            value: "បឹងប្រាំ",
            children: [
              { label: "ក្រពើសែសិប", value: "ក្រពើសែសិប" },
              { label: "បឹងក្រឡ", value: "បឹងក្រឡ" },
              { label: "យុត្តិធម៌", value: "យុត្តិធម៌" },
              { label: "អូឫស្សី", value: "អូឫស្សី" },
              { label: "បឹងប្រាំ", value: "បឹងប្រាំ" },
              { label: "បឹងធុង", value: "បឹងធុង" },
              { label: "ជ័យជំនះ", value: "ជ័យជំនះ" },
              { label: "សំណាងព្រះស្រី", value: "សំណាងព្រះស្រី" }
            ]            
          }
        ],
        label: "ភ្នំព្រឹក", 
        value: "ភ្នំព្រឹក",
        children: [
          {
            
          },
        ],
        label: "មោងឫស្សី", 
        value: "មោងឫស្សី",
        children: [
          {
            label: "ឆ្នាលមាន់",
            value: "ឆ្នាលមាន់",
            children: [
              { label: "ក្រាំងស្វាត", value: "ក្រាំងស្វាត" },
              { label: "បន្ទាយចារ", value: "បន្ទាយចារ" },
              { label: "ព្រៃសិន", value: "ព្រៃសិន" },
              { label: "ព្រៃទទឹង", value: "ព្រៃទទឹង" },
              { label: "សំរោង", value: "សំរោង" },
              { label: "ឫស្សីព្រះ", value: "ឫស្សីព្រះ" },
              { label: "ឆ្នាល់មាន់", value: "ឆ្នាល់មាន់" }            
            ]
          },
          {
            label: "ដូនបា",
            value: "ដូនបា",
            children: [
              { label: "បាស្រែ", value: "បាស្រែ" },
              { label: "ដូនបា", value: "ដូនបា" },
              { label: "ព្រៃភ្ញាស", value: "ព្រៃភ្ញាស" },
              { label: "ទួលលៀប", value: "ទួលលៀប" },
              { label: "គោករកា", value: "គោករកា" },
              { label: "ខ្លែងគង់", value: "ខ្លែងគង់" },
              { label: "ខ្វែង", value: "ខ្វែង" },
              { label: "ព្រៃប៉ែន", value: "ព្រៃប៉ែន" }
            ]
          }
        ],
      },
      {
        label: "រតនមណ្ឌល", 
        value: "រតនមណ្ឌល",
        children: [
          {
            label: "ឆ្នាលមាន់",
            value: "ឆ្នាលមាន់",
            children: [
              { label: "ក្រាំងស្វាត", value: "ក្រាំងស្វាត" },
              { label: "បន្ទាយចារ", value: "បន្ទាយចារ" },
              { label: "ព្រៃសិន", value: "ព្រៃសិន" },
              { label: "ព្រៃទទឹង", value: "ព្រៃទទឹង" },
              { label: "សំរោង", value: "សំរោង" },
              { label: "ឫស្សីព្រះ", value: "ឫស្សីព្រះ" },
              { label: "ឆ្នាល់មាន់", value: "ឆ្នាល់មាន់" }            
            ]
          },
          {
            label: "ដូនបា",
            value: "ដូនបា",
            children: [
              { label: "បាស្រែ", value: "បាស្រែ" },
              { label: "ដូនបា", value: "ដូនបា" },
              { label: "ព្រៃភ្ញាស", value: "ព្រៃភ្ញាស" },
              { label: "ទួលលៀប", value: "ទួលលៀប" },
              { label: "គោករកា", value: "គោករកា" },
              { label: "ខ្លែងគង់", value: "ខ្លែងគង់" },
              { label: "ខ្វែង", value: "ខ្វែង" },
              { label: "ព្រៃប៉ែន", value: "ព្រៃប៉ែន" }
            ]
          }
        ],
      },
      {
        label: "សំពៅលូន", 
        value: "សំពៅលូន",
        children: [
          {
            label: "ឆ្នាលមាន់",
            value: "ឆ្នាលមាន់",
            children: [
              { label: "ក្រាំងស្វាត", value: "ក្រាំងស្វាត" },
              { label: "បន្ទាយចារ", value: "បន្ទាយចារ" },
              { label: "ព្រៃសិន", value: "ព្រៃសិន" },
              { label: "ព្រៃទទឹង", value: "ព្រៃទទឹង" },
              { label: "សំរោង", value: "សំរោង" },
              { label: "ឫស្សីព្រះ", value: "ឫស្សីព្រះ" },
              { label: "ឆ្នាល់មាន់", value: "ឆ្នាល់មាន់" }            
            ]
          },
          {
            label: "ដូនបា",
            value: "ដូនបា",
            children: [
              { label: "បាស្រែ", value: "បាស្រែ" },
              { label: "ដូនបា", value: "ដូនបា" },
              { label: "ព្រៃភ្ញាស", value: "ព្រៃភ្ញាស" },
              { label: "ទួលលៀប", value: "ទួលលៀប" },
              { label: "គោករកា", value: "គោករកា" },
              { label: "ខ្លែងគង់", value: "ខ្លែងគង់" },
              { label: "ខ្វែង", value: "ខ្វែង" },
              { label: "ព្រៃប៉ែន", value: "ព្រៃប៉ែន" }
            ]
          }
        ],
      },
      {
        label: "សំឡូត", 
        value: "សំឡូត",
        children: [
          {
            label: "ឆ្នាលមាន់",
            value: "ឆ្នាលមាន់",
            children: [
              { label: "ក្រាំងស្វាត", value: "ក្រាំងស្វាត" },
              { label: "បន្ទាយចារ", value: "បន្ទាយចារ" },
              { label: "ព្រៃសិន", value: "ព្រៃសិន" },
              { label: "ព្រៃទទឹង", value: "ព្រៃទទឹង" },
              { label: "សំរោង", value: "សំរោង" },
              { label: "ឫស្សីព្រះ", value: "ឫស្សីព្រះ" },
              { label: "ឆ្នាល់មាន់", value: "ឆ្នាល់មាន់" }            
            ]
          },
          {
            label: "ដូនបា",
            value: "ដូនបា",
            children: [
              { label: "បាស្រែ", value: "បាស្រែ" },
              { label: "ដូនបា", value: "ដូនបា" },
              { label: "ព្រៃភ្ញាស", value: "ព្រៃភ្ញាស" },
              { label: "ទួលលៀប", value: "ទួលលៀប" },
              { label: "គោករកា", value: "គោករកា" },
              { label: "ខ្លែងគង់", value: "ខ្លែងគង់" },
              { label: "ខ្វែង", value: "ខ្វែង" },
              { label: "ព្រៃប៉ែន", value: "ព្រៃប៉ែន" }
            ]
          }
        ],
      },
      {
        label: "ឯកភ្នំ", 
        value: "ឯកភ្នំ",
        children: [
          {
            label: "ព្រែកនរិន្ទ",
            value: "ព្រែកនរិន្ទ",
            children: [
              { label: "ព្រែកតាច្រែង", value: "ព្រែកតាច្រែង" },
              { label: "ព្រែកក្រូច", value: "ព្រែកក្រូច" },
              { label: "ស្វាយជ្រំ", value: "ស្វាយជ្រំ" },
              { label: "ព្រែកនរិន្ទ", value: "ព្រែកនរិន្ទ" },
              { label: "ស្តី", value: "ស្តី" },
              { label: "រហាលសួង", value: "រហាលសួង" },
              { label: "ដួងមា", value: "ដួងមា" },
              { label: "រាជដូនកែវ", value: "រាជដូនកែវ" },
              { label: "អន្សងសក", value: "អន្សងសក" },
              { label: "ព្រែកត្រប់", value: "ព្រែកត្រប់" }
            ]            
          },
          {
            label: "សំរោងក្នុង",
            value: "សំរោងក្នុង",
            children: [
              { label: "សំរោងក្នុង", value: "សំរោងក្នុង" },
              { label: "កំពង់សំបួរ", value: "កំពង់សំបួរ" },
              { label: "សំរោងស្នោរ", value: "សំរោងស្នោរ" },
              { label: "សំរោងអូរទ្រា", value: "សំរោងអូរទ្រា" },
              { label: "សំរោងតាកុក", value: "សំរោងតាកុក" }
            ]            
          },
          {
            label: "ព្រែកខ្ពប",
            value: "ព្រែកខ្ពប",
            children: [
              { label: "ព្រែកស្នោ", value: "ព្រែកស្នោ" },
              { label: "ព្រែកខ្ពប", value: "ព្រែកខ្ពប" },
              { label: "ស្នាពីមុខ", value: "ស្នាពីមុខ" },
              { label: "ខ្វិត", value: "ខ្វិត" },
              { label: "អូរកំបុត", value: "អូរកំបុត" }
            ]            
          },
          {
            label: "ព្រែកហ្លួង",
            value: "ព្រែកហ្លួង",
            children: [
              { label: "ព្រែកហ្លួង", value: "ព្រែកហ្លួង" },
              { label: "ស្តីលើ", value: "ស្តីលើ" },
              { label: "ស្តីក្រោម", value: "ស្តីក្រោម" },
              { label: "រហាលសួង", value: "រហាលសួង" },
              { label: "បាក់អំរែក", value: "បាក់អំរែក" },
              { label: "ដូនឥន្ទ", value: "ដូនឥន្ទ" },
              { label: "បាក់រទេះ", value: "បាក់រទេះ" }
            ]            
          },
          {
            label: "ពាមឯក",
            value: "ពាមឯក",
            children: [
              { label: "ដូនទាវ", value: "ដូនទាវ" },
              { label: "សួសអី", value: "សួសអី" },
              { label: "ពាមឯក", value: "ពាមឯក" },
              { label: "គង់ទុំ", value: "គង់ទុំ" },
              { label: "ករហាល", value: "ករហាល" },
              { label: "ព្រែកឆ្តោរ", value: "ព្រែកឆ្តោរ" },
              { label: "តាគម", value: "តាគម" },
              { label: "គោកដូង", value: "គោកដូង" }
            ]            
          },
          {
            label: "ព្រៃចាស់",
            value: "ព្រៃចាស់",
            children: [
              { label: "ព្រៃចាស់", value: "ព្រៃចាស់" },
              { label: "ពាមសីមា", value: "ពាមសីមា" },
              { label: "អន្លង់សណ្តាន់", value: "អន្លង់សណ្តាន់" },
              { label: "កោះជីវាំង", value: "កោះជីវាំង" },
              { label: "បាក់ព្រា", value: "បាក់ព្រា" }
            ]            
          },
          {
            label: "កោះជីវាំង",
            value: "កោះជីវាំង",
            children: [
              { label: "ថ្វាង", value: "ថ្វាង" },
              { label: "កំពង់ប្រហុក", value: "កំពង់ប្រហុក" },
              { label: "អន្លង់តាអួរ", value: "អន្លង់តាអួរ" },
              { label: "ព្រែកទាល់", value: "ព្រែកទាល់" },
              { label: "ក្បាលតោល", value: "ក្បាលតោល" }
            ]            
          }
        ],
      },
      {
        label: "សង្កែ", 
        value: "សង្កែ",
        children: [
          {
            label: "អន្លង់វិល",
            value: "អន្លង់វិល",
            children: [
              { label: "ច្រាបវាល", value: "ច្រាបវាល" },
              { label: "បេង", value: "បេង" },
              { label: "អន្លង់វិល", value: "អន្លង់វិល" },
              { label: "អូរមុនី ១", value: "អូរមុនី ១" },
              { label: "អូរមុនី ២", value: "អូរមុនី ២" },
              { label: "ជំនីក", value: "ជំនីក" },
              { label: "ពុកឆ្មា", value: "ពុកឆ្មា" },
              { label: "ស្ពង់", value: "ស្ពង់" },
              { label: "ស្វាយកង់", value: "ស្វាយកង់" },
              { label: "ដំបូកបុណ្យ", value: "ដំបូកបុណ្យ" }
            ]            
          },
          {
            label: "នរា",
            value: "នរា",
            children: [
              { label: "នរា ១", value: "នរា ១" },
              { label: "នរា ២", value: "នរា ២" },
              { label: "បាឡាត់", value: "បាឡាត់" },
              { label: "តាកុក", value: "តាកុក" }
            ]            
          },
          {
            label: "តាប៉ុន",
            value: "តាប៉ុន",
            children: [
              { label: "បឹងទឹម", value: "បឹងទឹម" },
              { label: "ស្វាយស", value: "ស្វាយស" },
              { label: "សម្តេច", value: "សម្តេច" },
              { label: "បាសែត", value: "បាសែត" },
              { label: "តាប៉ុន", value: "តាប៉ុន" },
              { label: "ប្រឡាយថ្ងូរ", value: "ប្រឡាយថ្ងូរ" }
            ]            
          },
          {
            label: "រកា",
            value: "រកា",
            children: [
              { label: "ឈូងត្រជាក់", value: "ឈូងត្រជាក់" },
              { label: "ពោធិ៍បាត់ដំបង", value: "ពោធិ៍បាត់ដំបង" },
              { label: "អំបែងថ្ងែ", value: "អំបែងថ្ងែ" },
              { label: "រកា", value: "រកា" },
              { label: "តាហែន ១", value: "តាហែន ១" },
              { label: "តាហែន ២", value: "តាហែន ២" }
            ]            
          },
          {
            label: "កំពង់ព្រះ",
            value: "កំពង់ព្រះ",
            children: [
              { label: "ព្រៃចែក", value: "ព្រៃចែក" },
              { label: "ក្រឡាញ់", value: "ក្រឡាញ់" },
              { label: "កំពង់ព្រះ", value: "កំពង់ព្រះ" },
              { label: "ស្រះកែវ", value: "ស្រះកែវ" },
              { label: "ស្រះចក", value: "ស្រះចក" },
              { label: "ស្រះចំបក់", value: "ស្រះចំបក់" }
            ]
          },
          {
            label: "កំពង់ព្រៀង",
            value: "កំពង់ព្រៀង",
            children: [
              { label: "សំបុកអក", value: "សំបុកអក" },
              { label: "សាលាត្រាវ", value: "សាលាត្រាវ" },
              { label: "កាច់រទេះ", value: "កាច់រទេះ" },
              { label: "ថ្មី", value: "ថ្មី" },
              { label: "អូសទូក", value: "អូសទូក" },
              { label: "ក្បាលថ្នល់", value: "ក្បាលថ្នល់" }
            ]             
          },
          {
            label: "រាំងកេសី",
            value: "រាំងកេសី",
            children: [
              { label: "ទួលស្នួល", value: "ទួលស្នួល" },
              { label: "វត្តកណ្តាល", value: "វត្តកណ្តាល" },
              { label: "រាំងកេសី", value: "រាំងកេសី" },
              { label: "រាំងក្រោល", value: "រាំងក្រោល" },
              { label: "ព្រៃស្វាយ", value: "ព្រៃស្វាយ" },
              { label: "ស្វាយជាតិ", value: "ស្វាយជាតិ" },
              { label: "បឹងវែង", value: "បឹងវែង" },
              { label: "ដំណាក់ដង្កោ", value: "ដំណាក់ដង្កោ" },
              { label: "កកោះកំបុត", value: "កកោះកំបុត" }
            ]              
          },
          {
            label: "អូរដំបង ១",
            value: "អូរដំបង ១",
            children: [
              { label: "វត្តតាមិម", value: "វត្តតាមិម" },
              { label: "បោះពោធិ៍", value: "បោះពោធិ៍" },
              { label: "អូរខ្ជាយ", value: "អូរខ្ជាយ" },
              { label: "អូរស្រឡៅ", value: "អូរស្រឡៅ" },
              { label: "វត្តចែង", value: "វត្តចែង" },
              { label: "សំរោងកោង", value: "សំរោងកោង" }
            ]             
          },
          {
            label: "អូរដំបង ២",
            value: "អូរដំបង ២",
            children: [
              { label: "អូរដំបង", value: "អូរដំបង" },
              { label: "ស្វាយជ្រំ", value: "ស្វាយជ្រំ" },
              { label: "កំពង់ម្តោក", value: "កំពង់ម្តោក" },
              { label: "ស្វាយធំ", value: "ស្វាយធំ" },
              { label: "ដំបូកខ្ពស់", value: "ដំបូកខ្ពស់" },
              { label: "ទួលល្វៀង", value: "ទួលល្វៀង" }
            ]             
          },
          {
            label: "វត្តមឹម",
            value: "វត្តមឹម",
            children: [
              { label: "កំពង់អំពិល", value: "កំពង់អំពិល" },
              { label: "កំពង់ឆ្លង", value: "កំពង់ឆ្លង" },
              { label: "អូរស្រឡៅ", value: "អូរស្រឡៅ" },
              { label: "អូរខ្ជាយ", value: "អូរខ្ជាយ" },
              { label: "ស្លក្រាម", value: "ស្លក្រាម" },
              { label: "អន្លង់ល្វា", value: "អន្លង់ល្វា" }
            ]            
          }
        ],
      },
    ]
    },
    {
        label: "បន្ទាយមានជ័យ", 
        value: "បន្ទាយមានជ័យ",
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
            "label": "ស្រុកសង្កែ",
            "value": "ស្រុកសង្កែ",
            "children": [
              {
                "label": "ឃុំអន្លង់វិល",
                "value": "ឃុំអន្លង់វិល",
                "children": [
                  { "label": "ភូមិទី១", "value": "ភូមិទី១" },
                  { "label": "ភូមិទី២", "value": "ភូមិទី២" },
                  { "label": "ភូមិទី៣", "value": "ភូមិទី៣" },
                  { "label": "ភូមិទី៤", "value": "ភូមិទី៤" },
                  { "label": "ភូមិទី៥", "value": "ភូមិទី៥" },
                  { "label": "ភូមិទី៦", "value": "ភូមិទី៦" },
                  { "label": "ភូមិទី៧", "value": "ភូមិទី៧" },
                  { "label": "ភូមិទី៨", "value": "ភូមិទី៨" },
                  { "label": "ភូមិទី៩", "value": "ភូមិទី៩" },
                  { "label": "ភូមិទី១០", "value": "ភូមិទី១០" }
                ]
              },
              {
                "label": "ឃុំនរា",
                "value": "ឃុំនរា",
                "children": [
                  { "label": "ភូមិទី១", "value": "ភូមិទី១" },
                  { "label": "ភូមិទី២", "value": "ភូមិទី២" },
                  { "label": "ភូមិទី៣", "value": "ភូមិទី៣" },
                  { "label": "ភូមិទី៤", "value": "ភូមិទី៤" }
                ]
              },
              {
                "label": "ឃុំតាប៉ុន",
                "value": "ឃុំតាប៉ុន",
                "children": [
                  { "label": "ភូមិទី១", "value": "ភូមិទី១" },
                  { "label": "ភូមិទី២", "value": "ភូមិទី២" },
                  { "label": "ភូមិទី៣", "value": "ភូមិទី៣" },
                  { "label": "ភូមិទី៤", "value": "ភូមិទី៤" },
                  { "label": "ភូមិទី៥", "value": "ភូមិទី៥" }
                ]
              },
              {
                "label": "ឃុំរកា",
                "value": "ឃុំរកា",
                "children": [
                  { "label": "ភូមិទី១", "value": "ភូមិទី១" },
                  { "label": "ភូមិទី២", "value": "ភូមិទី២" },
                  { "label": "ភូមិទី៣", "value": "ភូមិទី៣" },
                  { "label": "ភូមិទី៤", "value": "ភូមិទី៤" },
                  { "label": "ភូមិទី៥", "value": "ភូមិទី៥" },
                  { "label": "ភូមិទី៦", "value": "ភូមិទី៦" }
                ]
              },
              {
                "label": "ឃុំកំពង់ព្រះ",
                "value": "ឃុំកំពង់ព្រះ",
                "children": [
                  { "label": "ភូមិទី១", "value": "ភូមិទី១" },
                  { "label": "ភូមិទី២", "value": "ភូមិទី២" },
                  { "label": "ភូមិទី៣", "value": "ភូមិទី៣" },
                  { "label": "ភូមិទី៤", "value": "ភូមិទី៤" },
                  { "label": "ភូមិទី៥", "value": "ភូមិទី៥" },
                  { "label": "ភូមិទី៦", "value": "ភូមិទី៦" }
                ]
              },
              {
                "label": "ឃុំកំពង់ព្រៀង",
                "value": "ឃុំកំពង់ព្រៀង",
                "children": [
                  { "label": "ភូមិទី១", "value": "ភូមិទី១" },
                  { "label": "ភូមិទី២", "value": "ភូមិទី២" },
                  { "label": "ភូមិទី៣", "value": "ភូមិទី៣" },
                  { "label": "ភូមិទី៤", "value": "ភូមិទី៤" },
                  { "label": "ភូមិទី៥", "value": "ភូមិទី៥" },
                  { "label": "ភូមិទី៦", "value": "ភូមិទី៦" }
                ]
              },
              {
                "label": "ឃុំរាំងកេសី",
                "value": "ឃុំរាំងកេសី",
                "children": [
                  { "label": "ភូមិទី១", "value": "ភូមិទី១" },
                  { "label": "ភូមិទី២", "value": "ភូមិទី២" },
                  { "label": "ភូមិទី៣", "value": "ភូមិទី៣" },
                  { "label": "ភូមិទី៤", "value": "ភូមិទី៤" },
                  { "label": "ភូមិទី៥", "value": "ភូមិទី៥" },
                  { "label": "ភូមិទី៦", "value": "ភូមិទី៦" },
                  { "label": "ភូមិទី៧", "value": "ភូមិទី៧" },
                  { "label": "ភូមិទី៨", "value": "ភូមិទី៨" },
                  { "label": "ភូមិទី៩", "value": "ភូមិទី៩" }
                ]
              },
              {
                "label": "ឃុំអូរដំបង ១",
                "value": "ឃុំអូរដំបង ១",
                "children": [
                  { "label": "ភូមិទី១", "value": "ភូមិទី១" },
                  { "label": "ភូមិទី២", "value": "ភូមិទី២" },
                  { "label": "ភូមិទី៣", "value": "ភូមិទី៣" },
                  { "label": "ភូមិទី៤", "value": "ភូមិទី៤" },
                  { "label": "ភូមិទី៥", "value": "ភូមិទី៥" },
                  { "label": "ភូមិទី៦", "value": "ភូមិទី៦" }
                ]
              },
              {
                "label": "ឃុំអូរដំបង ២",
                "value": "ឃុំអូរដំបង ២",
                "children": [
                  { "label": "ភូមិទី១", "value": "ភូមិទី១" },
                  { "label": "ភូមិទី២", "value": "ភូមិទី២" },
                  { "label": "ភូមិទី៣", "value": "ភូមិទី៣" },
                  { "label": "ភូមិទី៤", "value": "ភូមិទី៤" },
                  { "label": "ភូមិទី៥", "value": "ភូមិទី៥" },
                  { "label": "ភូមិទី៦", "value": "ភូមិទី៦" }
                ]
              },
              {
                "label": "ឃុំវត្តតាមិម",
                "value": "ឃុំវត្តតាមិម",
                "children": [
                  { "label": "ភូមិទី១", "value": "ភូមិទី១" },
                  { "label": "ភូមិទី២", "value": "ភូមិទី២" },
                  { "label": "ភូមិទី៣", "value": "ភូមិទី៣" },
                  { "label": "ភូមិទី៤", "value": "ភូមិទី៤" },
                  { "label": "ភូមិទី៥", "value": "ភូមិទី៥" },
                  { "label": "ភូមិទី៦", "value": "ភូមិទី៦" }
                ]
              }
            ]
          },
          {
            "label": "ស្រុកថ្មគោល",
            "value": "ស្រុកថ្មគោល",
            "children": [
              {
                "label": "ឃុំតាពូង",
                "value": "ឃុំតាពូង",
                "children": []
              },
              {
                "label": "ឃុំតាម៉ឺន",
                "value": "ឃុំតាម៉ឺន",
                "children": []
              },
              {
                "label": "ឃុំអូរតាគី",
                "value": "ឃុំអូរតាគី",
                "children": []
              },
              {
                "label": "ឃុំជ្រៃ",
                "value": "ឃុំជ្រៃ",
                "children": []
              },
              {
                "label": "ឃុំអន្លង់រុន",
                "value": "ឃុំអន្លង់រុន",
                "children": []
              },
              {
                "label": "ឃុំជ្រោយស្តៅ",
                "value": "ឃុំជ្រោយស្តៅ",
                "children": []
              },
              {
                "label": "ឃុំបឹងព្រីង",
                "value": "ឃុំបឹងព្រីង",
                "children": []
              },
              {
                "label": "ឃុំគោកឃ្មុំ",
                "value": "ឃុំគោកឃ្មុំ",
                "children": []
              },
              {
                "label": "ឃុំបន្សាយត្រែង",
                "value": "ឃុំបន្សាយត្រែង",
                "children": []
              },
              {
                "label": "ឃុំរូងជ្រៃ",
                "value": "ឃុំរូងជ្រៃ",
                "children": []
              }
            ]
          },
          {
            "label": "ស្រុកបាត់ដំបង",
            "value": "ស្រុកបាត់ដំបង",
            "children": [
              {
                "label": "ទួលតាឯក",
                "value": "ទួលតាឯក",
                "children": [
                  { "label": "អូរតាគាំ ១", "value": "អូរតាគាំ ១" },
                  { "label": "អូរតាគាំ ២", "value": "អូរតាគាំ ២" },
                  { "label": "អូរតាគាំ ៣", "value": "អូរតាគាំ ៣" },
                  { "label": "ទួលតាឯក", "value": "ទួលតាឯក" },
                  { "label": "ដង្កោទាប", "value": "ដង្កោទាប" }
                ]
              },
              {
                "label": "ព្រែកព្រះស្តេច",
                "value": "ព្រែកព្រះស្តេច",
                "children": [
                  { "label": "ព្រែកព្រះសេ្តច", "value": "ព្រែកព្រះសេ្តច" },
                  { "label": "ព្រែកតាតន់", "value": "ព្រែកតាតន់" },
                  { "label": "១៣ មករា", "value": "១៣ មករា" },
                  { "label": "អូរខ្ជាយ", "value": "អូរខ្ជាយ" },
                  { "label": "ទ្បដ្ឋ", "value": "ទ្បដ្ឋ" },
                  { "label": "នំកៀ្រប", "value": "នំកៀ្រប" },
                  { "label": "បែកចានថ្មី", "value": "បែកចានថ្មី" },
                  { "label": "ចំការប្ញស្សី", "value": "ចំការបញ្ញាសី" }
                ]
              },
              {
                "label": "រតនៈ",
                "value": "រតនៈ",
                "children": [
                  { "label": "រំចេក ១", "value": "រំចេក ១" },
                  { "label": "រំចេក ២", "value": "រំចេក ២" },
                  { "label": "រំចេក ៣", "value": "រំចេក ៣" },
                  { "label": "រំចេក ៤", "value": "រំចេក ៤" },
                  { "label": "រំចេក ៥", "value": "រំចេក ៥" },
                  { "label": "សូភី ១", "value": "សូភី ១" },
                  { "label": "សូភី ២", "value": "សូភី ២" },
                  { "label": "រតនៈ", "value": "រតនៈ" }
                ]
              },
              {
                "label": "ចំការសំរោង",
                "value": "ចំការសំរោង",
                "children": [
                  { "label": "ចំការសំរោង ១", "value": "ចំការសំរោង ១" },
                  { "label": "ចំការសំរោង ២", "value": "ចំការសំរោង ២" },
                  { "label": "វត្តលៀប", "value": "វត្តលៀប" },
                  { "label": "វត្តរំដួល", "value": "វត្តរំដួល" },
                  { "label": "ផ្កាស្លា", "value": "ផ្កាស្លា" }
                ]
              },
              {
                "label": "ស្លាកែត",
                "value": "ស្លាកែត",
                "children": [
                  { "label": "ស្លាកែត", "value": "ស្លាកែត" },
                  { "label": "ដាំសៃ្ព", "value": "ដាំសៃ្ព" },
                  { "label": "ជ្រៃកោង", "value": "ជ្រៃកោង" }
                ]
              },
              {
                "label": "ក្តុលដូនទាវ",
                "value": "ក្តុលដូនទាវ",
                "children": [
                  { "label": "ចុងព្រែក", "value": "ចុងព្រែក" },
                  { "label": "ក្តុល", "value": "ក្តុល" },
                  { "label": "អូរតានប់", "value": "អូរតានប់" },
                  { "label": "តាព្រួច", "value": "តាព្រួច" },
                  { "label": "តាកុយ", "value": "តាកុយ" },
                  { "label": "កន្ទ្ទួត", "value": "កន្ទ្ទួត" },
                  { "label": "ថ្កូវ", "value": "ថ្កូវ" }
                ]
              },
              {
                "label": "អូរម៉ាល់",
                "value": "អូរម៉ាល់",
                "children": [
                  { "label": "អូរម៉ាល់", "value": "អូរម៉ាល់" },
                  { "label": "ដាក់សសរ", "value": "ដាក់សសរ" },
                  { "label": "សាលាបាទ្បាត់", "value": "សាលាបាទ្បាត់" },
                  { "label": "ព្រៃដាច់", "value": "ព្រៃដាច់" },
                  { "label": "គោកពនៃ្ល", "value": "គោកពនៃ្ល" },
                  { "label": "វត្តរកា", "value": "វត្តរកា" },
                  { "label": "កូនសេក", "value": "កូនសេក" },
                  { "label": "អណ្តូងព្រីង", "value": "អណ្តូងព្រីង" },
                  { "label": "បឹងរាំង", "value": "បឹងរាំង" },
                  { "label": "ព្រៃរកា", "value": "ព្រៃរកា" }
                ]
              },
              {
                "label": "វត្តគរ",
                "value": "វត្តគរ",
                "children": [
                  { "label": "វត្តគរ", "value": "វត្តគរ" },
                  { "label": "ច្រាបក្រសាំង", "value": "ច្រាបក្រសាំង" },
                  { "label": "បល្ល័ង្គ", "value": "បល្ល័ង្គ" },
                  { "label": "ខ្សាច់ពោយ", "value": "ខ្សាច់ពោយ" },
                  { "label": "ដំណាក់ហ្លួង", "value": "ដំណាក់ហ្លួង" },
                  { "label": "កំពង់សីមា", "value": "កំពង់សីមា" }
                ]
              },
              {
                "label": "អូរចារ",
                "value": "អូរចារ",
                "children": [
                  { "label": "អូរចារ", "value": "អូរចារ" },
                  { "label": "ព្រៃកូនសេក", "value": "ព្រៃកូនសេក" },
                  { "label": "កាប់គោថ្មី", "value": "កាប់គោថ្មី" },
                  { "label": "អណ្តូងចេញ", "value": "អណ្តូងចេញ" },
                  { "label": "អញ្ចាញ", "value": "អញ្ចាញ" },
                  { "label": "អង់", "value": "អង់" }
                ]
              },
              {
                "label": "ស្វាយប៉ោ",
                "value": "ស្វាយប៉ោ",
                "children": [
                  { "label": "ព្រែកមហាទេព", "value": "ព្រែកមហាទេព" },
                  { "label": "កំពង់ក្របី", "value": "កំពង់ក្របី" },
                  { "label": "២០ ឧសភា", "value": "២០ ឧសភា" },
                  { "label": "កម្មករ", "value": "កម្មករ" }
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

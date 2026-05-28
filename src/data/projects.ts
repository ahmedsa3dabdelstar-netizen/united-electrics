export type Project = {
  id: string;
  name: string;
  year: number;
  category: "سكني" | "حكومي" | "حياة كريمة" | "تجاري" | "أمني";
  owner: string;
  consultant?: string;
  contractor?: string;
  scope: string;
  location?: string;
};

export const projects: Project[] = [
  { id: "ashgar-darna", name: "مشروع أشجار دارنا", year: 2019, category: "سكني", owner: "شركة مصر المحروسة", consultant: "شركة مصر المحروسة", contractor: "شركة مصر المحروسة", scope: "تنفيذ الموقع العام والشبكات ومبنى التوزيع الخاص بالكهرباء", location: "المعادي" },
  { id: "knowledge-city", name: "مشروع مدينة المعرفة", year: 2019, category: "حكومي", owner: "الهيئة الهندسية للقوات المسلحة", consultant: "SG", contractor: "السعداء جروب", scope: "تنفيذ مبنى ذوي الإعاقة والاحتياجات الخاصة", location: "العاصمة الإدارية" },
  { id: "valette", name: "مشروع فاليت", year: 2020, category: "سكني", owner: "سوديك", consultant: "إمام وخطيب", contractor: "شركة الشمس", scope: "تنفيذ 4 عمارات سكنية - توريد وتركيب أعمال كهرباء", location: "التجمع الخامس" },
  { id: "interior-complex", name: "مبنى مجمع وزارة الداخلية", year: 2020, category: "أمني", owner: "وزارة الداخلية", consultant: "جهاز المدينة", contractor: "شركة التبارك", scope: "تنفيذ أعمال الكهرباء للمجمع", location: "مدينة العاشر" },
  { id: "trio-gardenia", name: "مشروع تريو جاردينيا", year: 2021, category: "سكني", owner: "شركة مصر المحروسة", consultant: "محرم باخوم", contractor: "شركة مصر المحروسة", scope: "تنفيذ 27 فيلا - توريد وتركيب أعمال كهرباء", location: "التجمع الخامس" },
  { id: "hayah-karima-qena", name: "حياة كريمة - قنا", year: 2022, category: "حياة كريمة", owner: "الهيئة الهندسية للقوات المسلحة", consultant: "الشعراني / العتابي للاستشارات الهندسية", contractor: "شركة التراث", scope: "6 مشروعات (مجمع خدمة المواطنين، وحدة صحية، مركز طب الأسرة، مركز شباب، وحدة تنمية الأسرة، وحدة التضامن) - توريد وتركيب أعمال كهرباء وميكانيكا", location: "محافظة قنا" },
  { id: "hayah-karima-luxor", name: "رفع كفاءة القرى - حياة كريمة", year: 2022, category: "حياة كريمة", owner: "الهيئة الهندسية للقوات المسلحة", consultant: "جهاز تعمير البحر الأحمر", contractor: "شركة السويدي", scope: "تنفيذ قريتين - الشبكات والمحولات ومباني التوزيع وأعمدة الشوارع", location: "محافظة الأقصر - أرمنت" },
  { id: "hayah-karima-qous", name: "شبكات حياة كريمة - قوص", year: 2022, category: "حياة كريمة", owner: "الهيئة الهندسية للقوات المسلحة", consultant: "العتابي للاستشارات الهندسية", contractor: "شركة جلوب الباشا", scope: "تنفيذ 7 قرى (المسيد، عباسة، شنهور، المفرجية، الكلالسة، المعري، الكرياتية)", location: "محافظة قنا - مركز قوص" },
  { id: "asher-prison", name: "مشروع سجن العاشر", year: 2022, category: "أمني", owner: "وزارة الداخلية", consultant: "عفيفي للاستشارات الهندسية", contractor: "شركة التبارك", scope: "مبنى الاستقبال والزيارة + مبنى المسجد + السور الرئيسي", location: "مدينة العاشر" },
  { id: "ain-elhaya", name: "مشروع عين الحياة", year: 2022, category: "تجاري", owner: "وزارة الداخلية", consultant: "عفيفي للاستشارات الهندسية", contractor: "شركة الشمس", scope: "تنفيذ عدد من المولات التجارية والإدارية", location: "الفسطاط" },
  { id: "platinum-club", name: "نادي بلاتنيوم", year: 2018, category: "سكني", owner: "—", scope: "تنفيذ مباني الإدارة والملاعب - أعمال الكهرباء", location: "القاهرة الجديدة" },
  { id: "lian", name: "كمبوند ليان", year: 2019, category: "سكني", owner: "—", scope: "تنفيذ 116 فيلا - أعمال الكهرباء", location: "التجمع الخامس" },
  { id: "judges-club", name: "نادي قضاة مجلس الدولة", year: 2019, category: "سكني", owner: "نادي قضاة مجلس الدولة", scope: "12 عمارة سكنية - توريد وتركيب أعمال الكهرباء", location: "التجمع الخامس" },
];

// // db.seed.ts
// import { Seeder } from 'typeorm-seeding';
// import { SpokenLanguagesEntity } from '../../shared/entity/spoken_languages.entity';

// export default class SeedDatabaseforSpokenLanguage implements Seeder {
//   public async run(): Promise<any> {
//     const spokenLanguages = [
//       {
//         name: 'English',
//       },
//       {
//         name: 'Chinese',
//       },
//     ];

//     for (const spokenLanguage of spokenLanguages) {
//       const spoken_languages = new SpokenLanguagesEntity();
//       spoken_languages.name = spokenLanguage.name;
//       await spoken_languages.save();
//     }
//   }
// }

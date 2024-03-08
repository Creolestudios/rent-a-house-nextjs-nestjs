import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import AddLanguage from './AddLanguage';
import Icon from '@ant-design/icons';
import crossIcon from '@/assets/images/icons/crossSvg';

const AddLanguageModal = ({ isModalOpen, setIsModalOpen }: any) => {
  const header = () => {
    return (
      <span className='icon' onClick={() => setIsModalOpen(false)}>
        <Icon component={crossIcon} />
      </span>
    );
  };
  const [languageList, setLanguagelist] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        const languageList = data.reduce((uniqueLanguages, country) => {
          country.languages.forEach((language) => {
            const { name, iso639_1: code } = language;
            const languageObj = { name, code };

            const existingLanguage = uniqueLanguages.find(
              (lang) => lang.code === code
            );
            const isWidelyUsed = isLanguageWidelyUsed(code);
            if (!existingLanguage && isWidelyUsed) {
              uniqueLanguages.push(languageObj);
            }
          });
          return uniqueLanguages;
        }, []);
        setLanguagelist(languageList);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchData();
  }, []);
  const isLanguageWidelyUsed = (code) => {
    const widelyUsedLanguages = [
      'en',
      'es',
      'fr',
      'de',
      'zh',
      'ar',
      'hi',
      'ja',
      'ru',
      'pt',
    ];
    return widelyUsedLanguages.includes(code);
  };

  return (
    <>
      <Modal
        centered
        title={header()}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer=''
        width={398}
        className='add-language-modal'
      >
        <AddLanguage setIsModalOpen={setIsModalOpen} languageList={languageList}/>
      </Modal>
    </>
  );
};

export default AddLanguageModal;

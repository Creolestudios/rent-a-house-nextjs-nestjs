import React from 'react';
import { Container, SectionTitle } from '@/globalStyles';
import { color, fontFamily } from '@/styles/variable';
import SubTitle from '../SubTitle/SubTitle';
import Title from '../Title/Title';
import { ExperienceSectionWrapper } from './LendingPage.styles';
import ExperienceList from './ExperienceList';
import Link from 'next/link';
import Icon from '@ant-design/icons';
import longArrow from '@/assets/images/icons/LongRightArrowSvg';
import { useRouter } from 'next/router';

const ExperienceSection = ({isEdit,content}:any) => {
  const router = useRouter();

  return (
    <ExperienceSectionWrapper>
      <Container>
        <SectionTitle className='section-title'>
          <Title
            title={content.ExperienceSectionTitle1}
            color={`${color.blackColor}`}
            fontFamily={`${fontFamily.ptBold}`}
            marginBottom={'0'}
            className='title'
            isEdit={isEdit}
            id={'ExperienceSectionTitle1'}
          />
          <SubTitle
            title={
            content.ExperienceSectionSubTitle1
            }
            color={`${color.greyColor}`}
            fontFamily={`${fontFamily.ptRegular}`}
            marginBottom={'0'}
            className='sub-title'
            isEdit={isEdit}
            id={'ExperienceSectionSubTitle1'}
          />
        </SectionTitle>
        <ExperienceList isEdit={isEdit} id={'experienceSectionHome'} content={content}/>
        <div className='see-more-btn'>
          <div
            className='find-place'
            onClick={() => router.push('home/property-listing?::')}
          >
            Find the prefect place for yourself
            <Icon component={longArrow} />
          </div>
        </div>
      </Container>
    </ExperienceSectionWrapper>
  );
};

export default ExperienceSection;

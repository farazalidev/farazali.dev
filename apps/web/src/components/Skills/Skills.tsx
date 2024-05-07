import { Status } from '@repo/ui/components';
import { cn } from '@repo/ui/utils';
import type { HTMLAttributes } from 'react';
import Image from 'next/image';
import { skillsData, type SkillData } from './skills.data';

interface SkillsProps extends HTMLAttributes<HTMLDivElement> {}

export const Skills: React.FC<SkillsProps> = ({ className, ...props }) => {
    return (
        <div className={cn('common_section rounded-xl text-primary-text', className)} {...props}>
            <Status>Skills</Status>
            <div className='flex w-full justify-center xl:justify-between gap-3 xl:gap-0 flex-wrap h-[70%] mt-4'>
                {skillsData.map((skill, i) => {
                    return <SkillIcon className={cn(i % 2 ? 'xl:place-self-end' : '')} key={skill.name} skillData={skill} />;
                })}
            </div>
        </div>
    );
};

interface SkillIconProps extends HTMLAttributes<HTMLDivElement> {
    skillData: SkillData;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ skillData, className, ...props }) => {
    return (
        <div className={cn('relative h-[40px] w-[40px] md:h-[54px] md:w-[45px]', className)} {...props}>
            <Image alt={skillData.name} fill objectFit='contain' src={skillData.path} title={skillData.name} />
        </div>
    );
};

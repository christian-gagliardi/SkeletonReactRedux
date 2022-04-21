import {Button, ButtonScale, ButtonVariant} from '../../components/atoms/Button';
import {FaBeer} from 'react-icons/fa';

const PreviewPage: React.FC = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='inline-flex space-x-2'>
        <Button label='Button' variant={ButtonVariant.primary} scale={ButtonScale.LG} />
        <Button label='Button' variant={ButtonVariant.secondary} scale={ButtonScale.LG} />
        <Button label='Button' variant={ButtonVariant.success} scale={ButtonScale.LG} />
        <Button label='Button' variant={ButtonVariant.danger} scale={ButtonScale.LG} />
        <Button label='Button' variant={ButtonVariant.text} scale={ButtonScale.LG} />
      </div>
      <div className='flex space-x-2'>
        <Button label='Button' variant={ButtonVariant.primary} scale={ButtonScale.MD} />
        <Button label='Button' variant={ButtonVariant.secondary} scale={ButtonScale.MD} />
        <Button label='Button' variant={ButtonVariant.success} scale={ButtonScale.MD} />
        <Button label='Button' variant={ButtonVariant.danger} scale={ButtonScale.MD} />
        <Button label='Button' variant={ButtonVariant.text} scale={ButtonScale.MD} />
      </div>
      <div className='flex space-x-2'>
        <Button label='Button' variant={ButtonVariant.primary} scale={ButtonScale.SM} />
        <Button label='Button' variant={ButtonVariant.secondary} scale={ButtonScale.SM} />
        <Button label='Button' variant={ButtonVariant.success} scale={ButtonScale.SM} />
        <Button label='Button' variant={ButtonVariant.danger} scale={ButtonScale.SM} />
        <Button label='Button' variant={ButtonVariant.text} scale={ButtonScale.SM} />
      </div>
      <div className='inline-flex space-x-2'>
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.primary}
          scale={ButtonScale.LG}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.secondary}
          scale={ButtonScale.LG}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.success}
          scale={ButtonScale.LG}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.danger}
          scale={ButtonScale.LG}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.text}
          scale={ButtonScale.LG}
        />
      </div>
      <div className='flex space-x-2'>
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.primary}
          scale={ButtonScale.MD}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.secondary}
          scale={ButtonScale.MD}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.success}
          scale={ButtonScale.MD}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.danger}
          scale={ButtonScale.MD}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.text}
          scale={ButtonScale.MD}
        />
      </div>
      <div className='flex space-x-2'>
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.primary}
          scale={ButtonScale.SM}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.secondary}
          scale={ButtonScale.SM}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.success}
          scale={ButtonScale.SM}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.danger}
          scale={ButtonScale.SM}
        />
        <Button
          icon={<FaBeer />}
          label='Button'
          variant={ButtonVariant.text}
          scale={ButtonScale.SM}
        />
      </div>
      <div className='inline-flex space-x-2'>
        <Button icon={<FaBeer />} variant={ButtonVariant.primary} scale={ButtonScale.LG} />
        <Button icon={<FaBeer />} variant={ButtonVariant.secondary} scale={ButtonScale.LG} />
        <Button icon={<FaBeer />} variant={ButtonVariant.success} scale={ButtonScale.LG} />
        <Button icon={<FaBeer />} variant={ButtonVariant.danger} scale={ButtonScale.LG} />
        <Button icon={<FaBeer />} variant={ButtonVariant.text} scale={ButtonScale.LG} />
      </div>
      <div className='flex space-x-2'>
        <Button icon={<FaBeer />} variant={ButtonVariant.primary} scale={ButtonScale.MD} />
        <Button icon={<FaBeer />} variant={ButtonVariant.secondary} scale={ButtonScale.MD} />
        <Button icon={<FaBeer />} variant={ButtonVariant.success} scale={ButtonScale.MD} />
        <Button icon={<FaBeer />} variant={ButtonVariant.danger} scale={ButtonScale.MD} />
        <Button icon={<FaBeer />} variant={ButtonVariant.text} scale={ButtonScale.MD} />
      </div>
      <div className='flex space-x-2'>
        <Button icon={<FaBeer />} variant={ButtonVariant.primary} scale={ButtonScale.SM} />
        <Button icon={<FaBeer />} variant={ButtonVariant.secondary} scale={ButtonScale.SM} />
        <Button icon={<FaBeer />} variant={ButtonVariant.success} scale={ButtonScale.SM} />
        <Button icon={<FaBeer />} variant={ButtonVariant.danger} scale={ButtonScale.SM} />
        <Button icon={<FaBeer />} variant={ButtonVariant.text} scale={ButtonScale.SM} />
      </div>
    </div>
  );
};

export default PreviewPage;

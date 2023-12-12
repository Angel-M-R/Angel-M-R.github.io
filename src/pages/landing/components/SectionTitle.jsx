import PropTypes from 'prop-types';

const SectionTitle = ({title}) => {
  return (
    <h2 className="min-w-[50%] max-sm:min-w-full max-sm:pl-4 mx-auto text-2xl font-medium text-[#F1D827]">{title}</h2>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string
}

export {SectionTitle}


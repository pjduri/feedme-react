import { ChoiceList } from './ChoiceList'
import allChoiceLists from '../../components/data/choice-lists.json'
import { Banner } from './Banner'

export default function FeedMeNow({ id, setLayoutId }) {
    const choiceLists = allChoiceLists.filter(c => parseInt(c.layout_id) === parseInt(id))
    return (
        <>
            <Banner setLayoutId={setLayoutId} style={{ marginTop: 90 }} />
            <div className='row container-fluid' style={{ marginTop: 30 }}>
                {choiceLists.map(c => <ChoiceList key={c.id} choiceList={c} />)}
            </div>
        </>
    )
}
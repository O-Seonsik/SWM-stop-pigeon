import './ActionGroup.css'
import ActionDivider from './ActionDivider';
import ActionButton from './ActionButton';
import icon_stop from 'data/image/icon_stop.svg'
import icon_docs from 'data/image/icon_docs.svg'

function ActionGroup() {
    return (
        <div id="action-group">
            <ActionButton
                icon={icon_stop}
                name="비둘기 쫓기"
            />
            <ActionDivider />
            <ActionButton
                icon={icon_docs}
                name="비둘기 민원 접수하기"
            />
        </div>
    );
}

export default ActionGroup;